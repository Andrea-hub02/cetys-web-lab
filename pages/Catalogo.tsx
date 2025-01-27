import React, { useState } from 'react';
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


const Catalogo = () => {
  const [selectedLab, setSelectedLab] = useState('');
  const [selectedTool, setSelectedTool] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const [rows, setRows] = useState([
    {
      id: 1,
      ID_Material: 101,
      ITEM: 'A001',
      ID_Laboratorio: 'Manofactura',
      DESCRIPCION: 'Microscopio Óptico',
      MODELO: 'BX53',
      No_SERIE: '12345',
      No_INVENTARIO: 'INV-001',
      ESTADO: 'Activo',
      ADQUISICION: '2020-05-10',
      EXISTENCIA: 10,
      No_PRESTAMO: 5,
      UBICACION: 'Almacén 1',
      IMAGEN: 'imagen1.png',
    },
  ]);

  const [newProduct, setNewProduct] = useState({
    ID_Material: '',
    ITEM: '',
    ID_Laboratorio: '',
    DESCRIPCION: '',
    MODELO: '',
    No_SERIE: '',
    No_INVENTARIO: '',
    ESTADO: '',
    ADQUISICION: '',
    EXISTENCIA: '',
    No_PRESTAMO: '',
    UBICACION: '',
    IMAGEN: '',
  });

  const laboratorios = ['Manofactura', 'Electronica', 'Mecatronica', 'Renovables', 'Metodos', 'Fisica'];
  const herramientas = ['Herramienta 1', 'Herramienta 2', 'Herramienta 3'];

  const togglePopup = () => setShowPopup(!showPopup);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedProduct = {
      ...newProduct,
      ID_Material: parseInt(newProduct.ID_Material, 10) || 0,
      EXISTENCIA: parseInt(newProduct.EXISTENCIA, 10) || 0,
      No_PRESTAMO: parseInt(newProduct.No_PRESTAMO, 10) || 0,
    };

    setRows((prevRows) => [...prevRows, { id: prevRows.length + 1, ...formattedProduct }]);
    setShowPopup(false);

    // Resetear formulario
    setNewProduct({
      ID_Material: '',
      ITEM: '',
      ID_Laboratorio: '',
      DESCRIPCION: '',
      MODELO: '',
      No_SERIE: '',
      No_INVENTARIO: '',
      ESTADO: '',
      ADQUISICION: '',
      EXISTENCIA: '',
      No_PRESTAMO: '',
      UBICACION: '',
      IMAGEN: '',
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Buscar:', searchTerm);
  };

  const filteredData = rows.filter((row) => {
    const matchesLab = selectedLab ? row.ID_Laboratorio.includes(selectedLab) : true;
    const matchesTool = selectedTool ? row.ITEM.includes(selectedTool) : true;
    const matchesSearch = searchTerm
      ? row.DESCRIPCION.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchesLab && matchesTool && matchesSearch;
  });

  return (
    <div className={styles.cont}>
      <div className={styles.agregarB}>
        <button type="button" className={styles.addProductBtn} onClick={togglePopup}>
          <FaPlus />
          Agregar producto
        </button>
      </div>

      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupBox}>
            <button className={styles.closeBtn} onClick={togglePopup}>
            <HighlightOffIcon sx={{ fontSize: 40 }} /> 
              </button>
            <h2>Agregar producto</h2>
            <form className={styles.popupForm} onSubmit={handleAddProduct}>
              {[
                { name: 'ID_Material', placeholder: 'ID Material', type: 'text' },
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
                <FormControl sx={{ m: 1, minWidth: 320, minHeight:100 }} size="small" required>
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
