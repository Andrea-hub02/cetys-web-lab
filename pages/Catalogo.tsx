import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa'; // Importa el ícono de "+"


const Catalogo = () => {
  const [selectedLab, setSelectedLab] = useState('');
  const [selectedTool, setSelectedTool] = useState('');

  const laboratorios = ['Manofactura', 'Electronica', 'Mecatronica', 'Renovables', 'Metodos', 'Fisica'];
  const herramientas = ['Herramienta 1', 'Herramienta 2', 'Herramienta 3'];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Buscar...');
  };

  return (
    <div style={{ paddingTop: '0px', position: 'relative' }}> 
      {/* Botón "Agregar producto" */}
      <button 
        type="button" 
        style={{ 
            padding: '12px 20px', 
            borderRadius: '6px', 
            background: '#4CAF50',  /* Color del botón */
            color: 'white', 
            border: 'none', 
            fontSize: '16px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',  /* Espacio entre el ícono y el texto */
            position: 'absolute',  /* Coloca el botón en la parte superior derecha */
            top: '-88px', 
            right: '-295px' 
        }}
        onClick={() => { /* Acción al hacer clic en "Agregar producto" */ }}
        >
        <FaPlus />  {/* Ícono de "+" */}
        Agregar producto
        </button>

      {/* Formulario de búsqueda */}
      <form onSubmit={handleSearch} style={{ display: 'flex', gap: '20px', marginBottom: '30px', justifyContent: 'center', marginTop: '-200px' }}> {/* Subiendo aún más los botones */}
        {/* Input de búsqueda */}
        <input 
          type="text" 
          placeholder="Buscar..."
          style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '16px', width: '260px' }}
        />

        {/* Dropdown de laboratorios */}
        <select 
          value={selectedLab}
          onChange={(e) => setSelectedLab(e.target.value)}
          style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '16px', width: '250px' }}
        >
          <option value="">Laboratorios</option>
          {laboratorios.map((lab, index) => (
            <option key={index} value={lab}>
              {lab}
            </option>
          ))}
        </select>

        {/* Dropdown de herramientas */}
        <select 
          value={selectedTool}
          onChange={(e) => setSelectedTool(e.target.value)}
          style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '16px', width: '250px' }}
        >
          <option value="">Herramientas</option>
          {herramientas.map((tool, index) => (
            <option key={index} value={tool}>
              {tool}
            </option>
          ))}
        </select>

        {/* Botón de búsqueda clickeable sin funcionalidad */}
        <button 
          type="button" 
          style={{ padding: '12px 20px', borderRadius: '6px', background: '#4682B4', color: 'white', border: 'none', fontSize: '16px', width: '160px' }}
          onClick={() => { /* Acción vacía, botón solo clickeable */ }}
        >
          Buscar
        </button>
      </form>

      {/* Aquí iría la tabla para mostrar los datos cargados desde la base de datos */}
    </div>
  );
};

export default Catalogo;
