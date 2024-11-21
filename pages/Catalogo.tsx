import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa'; // Importa el ícono de "+"
import styles from '../styles/catalogo.module.css';
import DataTable from '@/components/DataTable';

const Catalogo = () => {
  const [selectedLab, setSelectedLab] = useState('');
  const [selectedTool, setSelectedTool] = useState('');
  const [showPopup, setShowPopup] = useState(false); // Estado para controlar la visibilidad del pop-up

  const laboratorios = ['Manofactura', 'Electronica', 'Mecatronica', 'Renovables', 'Metodos', 'Fisica'];
  const herramientas = ['Herramienta 1', 'Herramienta 2', 'Herramienta 3'];
  
  const togglePopup = () => {
    setShowPopup(!showPopup); // Cambia el estado del pop-up
  };

  // Maneja la acción de "Agregar producto"
  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault(); // Evita que la página se recargue
    setShowPopup(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Buscar...');
  };

  return (
    <div className={styles.cont}> 
      <div className={styles.agregarB}>
        {/* Botón "Agregar producto" */}
        <button 
          type="button" 
          className={styles.addProductBtn}
          onClick={togglePopup} // Abre el pop-up al hacer clic
        >
          <FaPlus /> {/* Ícono de "+" */}
          Agregar producto
        </button>
      </div> 
      
      {/* Pop-up */}
      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupBox}>
            <button className={styles.closeBtn} onClick={togglePopup}>X</button>
            <h2>Agregar producto</h2>

            {/* Formulario dentro del pop-up */}
            <form className={styles.popupForm} onSubmit={handleAddProduct}>
              {/* Form inputs */}
              <div className={styles.inputGroup}>
                <label htmlFor="item">ITEM:</label>
                <input type="text" id="item" name="item" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="description">Descripción:</label>
                <input type="text" id="description" name="description" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="model">Modelo:</label>
                <input type="text" id="model" name="model" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="inventoryNumber">Núm. de inventario:</label>
                <input type="text" id="inventoryNumber" name="inventoryNumber" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="serialNumber">Núm. de serie:</label>
                <input type="text" id="serialNumber" name="serialNumber" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="state">Estado:</label>
                <input type="text" id="state" name="state" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="acquisition">Adquisición:</label>
                <input type="text" id="acquisition" name="acquisition" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="existence">Existencia:</label>
                <input type="text" id="existence" name="existence" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="note">Nota:</label>
                <input type="text" id="note" name="note" />
              </div>

              <button type="submit" className={styles.submitBtn}>Agregar producto</button>
            </form>
          </div>
        </div>
      )}

      {/* Contenedor flex para los cuatro elementos */}
      <div className={styles.searchContainer}>
        {/* Input de búsqueda */}
        <div>
          <input 
            type="text" 
            placeholder="Buscar..." 
            className={styles.inputSearch} 
          />
        </div>
        <div>
          {/* Dropdown de laboratorios */}
          <select 
            value={selectedLab}
            onChange={(e) => setSelectedLab(e.target.value)}
            className={styles.dropdown}
          >
            {laboratorios.map((lab, index) => (
              <option key={index} value={lab}>
                {lab}
              </option>
            ))}
          </select> 
        </div>
        <div>
          {/* Dropdown de herramientas */}
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
        </div>
        <div>
          {/* Botón de búsqueda */}
          <button 
            type="button" 
            className={styles.searchBtn}
            onClick={() => { /* Acción vacía, botón solo clickeable */ }}
          >
            Buscar
          </button>
        </div>
        
      </div>
      {/* AQUI VA LA TABLA IMPORTADA  */}
      <div className={styles.dataTableContainer}>
        <DataTable></DataTable>
      </div>
      
    </div>
  );
};

export default Catalogo;
