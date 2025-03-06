import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import styles from '../styles/catalogo.module.css';
import DataTable from '@/components/DataTable';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { SelectChangeEvent } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


interface Material {
  id_material: number;
  id_laboratorio: string;
  descripcion: string;
  modelo: string;
  numero_serie: string;
  numero_inventario: string;
  estado: string;
  adquisicion: string;
  existencia: number;
  numero_prestamo: number;
  ubicacion: string;
  tipo_material: string;
}

interface RowData {
  id: number;
  ID_Material: number;
  TIPO_MATERIAL: string;
  ID_Laboratorio: string;
  DESCRIPCION: string;
  MODELO: string;
  No_SERIE: string;
  No_INVENTARIO: string;
  ESTADO: string;
  ADQUISICION: string;
  EXISTENCIA: number;
  No_PRESTAMO: number;
  UBICACION: string;
  IMAGEN: string;
}

const Catalogo = () => {
  const [selectedLab, setSelectedLab] = useState('');
  const [selectedTool, setSelectedTool] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [rows, setRows] = useState<RowData[]>([]);

  const [newProduct, setNewProduct] = useState<RowData>({
    id: 0,
    ID_Material: NaN,
    TIPO_MATERIAL: '',
    ID_Laboratorio: '',
    DESCRIPCION: '',
    MODELO: '',
    No_SERIE: '',
    No_INVENTARIO: '',
    ESTADO: '',
    ADQUISICION: '',
    EXISTENCIA: NaN,
    No_PRESTAMO: NaN,
    UBICACION: '',
    IMAGEN: '',
  });

  const laboratorios = ['Manofactura', 'Electronica', 'Mecatronica', 'Renovables', 'Metodos', 'Fisica'];
  const herramientas = ['Herramienta 1', 'Herramienta 2', 'Herramienta 3'];


  useEffect(() => {
    fetch('/api/material')
      .then((response) => response.json())
      .then((data: Material[]) => {
        const formattedData = data.map((item: Material) => ({
          id: item.id_material,
          ID_Material: item.id_material,
          TIPO_MATERIAL: item.tipo_material,
          ID_Laboratorio: String(item.id_laboratorio),
          DESCRIPCION: item.descripcion,
          MODELO: item.modelo,
          No_SERIE: item.numero_serie,
          No_INVENTARIO: item.numero_inventario,
          ESTADO: item.estado,
          ADQUISICION: item.adquisicion,
          EXISTENCIA: item.existencia,
          No_PRESTAMO: item.numero_prestamo,
          UBICACION: item.ubicacion,
          IMAGEN: '', 
        }));
        setRows(formattedData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedProduct: RowData = {
      ...newProduct,
      id: rows.length + 1,
      ID_Material: parseInt(newProduct.ID_Material.toString(), 10) || 0,
      EXISTENCIA: parseInt(newProduct.EXISTENCIA.toString(), 10) || 0,
      No_PRESTAMO: parseInt(newProduct.No_PRESTAMO.toString(), 10) || 0,
    };

    setRows((prevRows) => [...prevRows, formattedProduct]);
    setShowPopup(false);

    
    setNewProduct({
      id: 0,
      ID_Material: 0,
      TIPO_MATERIAL: '',
      ID_Laboratorio: '',
      DESCRIPCION: '',
      MODELO: '',
      No_SERIE: '',
      No_INVENTARIO: '',
      ESTADO: '',
      ADQUISICION: '',
      EXISTENCIA: 0,
      No_PRESTAMO: 0,
      UBICACION: '',
      IMAGEN: '',
    });
  };

  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Buscar:', searchTerm);
  };

  
  const filteredData = rows.filter((row) => {
    const matchesLab = selectedLab ? String(row.ID_Laboratorio).includes(selectedLab) : true;
    const matchesTool = selectedTool ? row.TIPO_MATERIAL.includes(selectedTool) : true;
    const matchesSearch = searchTerm
      ? row.DESCRIPCION.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchesLab && matchesTool && matchesSearch;
  });

  return (
    <div className={styles.cont}>
      <div className={styles.agregarB}>
        <button type="button" className={styles.addProductBtn} onClick={() => setShowPopup(true)}>
          <FaPlus />
          Agregar producto
        </button>
      </div>

      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupBox}>
            <button className={styles.closeBtn} onClick={() => setShowPopup(false)}>
              <HighlightOffIcon sx={{ fontSize: 40 }} />
            </button>
            <h2>Agregar producto</h2>
            <form className={styles.popupForm} onSubmit={handleAddProduct}>
              {[
                { name: 'ID_Material', placeholder: 'ID Material', type: 'number' },
                { name: 'ITEM', placeholder: 'Item', type: 'text' },
                { name: 'DESCRIPCION', placeholder: 'Descripción', type: 'text' },
                { name: 'MODELO', placeholder: 'Modelo', type: 'text' },
                { name: 'No_SERIE', placeholder: 'No. Serie', type: 'text' },
                { name: 'No_INVENTARIO', placeholder: 'No. Inventario', type: 'text' },
                { name: 'ESTADO', placeholder: 'Estado', type: 'text' },
                { name: 'ADQUISICION', placeholder: 'Fecha de adquisición', type: 'date' },
                { name: 'EXISTENCIA', placeholder: 'Existencia', type: 'number' },
                { name: 'No_PRESTAMO', placeholder: 'No. Préstamo', type: 'number' },
                { name: 'UBICACION', placeholder: 'Ubicación', type: 'text' },
                { name: 'IMAGEN', placeholder: 'Imagen (URL)', type: 'text' },
              ].map((field, index) => (
                <input
                  key={index}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={(newProduct as any)[field.name]}
                  onChange={handleInputChange}
                  required={field.name !== 'IMAGEN' && field.name !== 'MODELO'}
                  className={styles.popupInput}
                />
              ))}
              <div className={styles.popupSelect}>
                <FormControl sx={{ m: 1, minWidth: 320, minHeight: 100 }} size="small" required>
                  <InputLabel id="laboratorio-select-label">Laboratorio</InputLabel>
                  <Select
                    labelId="laboratorio-select-label"
                    id="laboratorio-select"
                    name="ID_Laboratorio"
                    value={newProduct.ID_Laboratorio}
                    label="Laboratorio"
                    onChange={handleInputChange}
                  >
                    {laboratorios.map((lab, index) => (
                      <MenuItem key={index} value={lab}>
                        {lab}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <button type="submit" className={styles.submitBtn}>
                  Agregar producto
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.inputSearch}
        />
        <select
          value={selectedLab}
          onChange={(e) => setSelectedLab(e.target.value)}
          className={styles.dropdown}
        >
          <option value="">Laboratorios</option>
          {laboratorios.map((lab, index) => (
            <option key={index} value={lab}>
              {lab}
            </option>
          ))}
        </select>
        <select
          value={selectedTool}
          onChange={(e) => setSelectedTool(e.target.value)}
          className={styles.dropdown}
        >
          <option value="">Herramientas</option>
          {herramientas.map((tool, index) => (
            <option key={index} value={tool}>
              {tool}
            </option>
          ))}
        </select>
        <button type="button" className={styles.searchBtn} onClick={handleSearch}>
          Buscar
        </button>
      </div>

      <div className={styles.dataTableContainer}>
        <DataTable data={filteredData} />
      </div>
    </div>
  );
};

export default Catalogo;