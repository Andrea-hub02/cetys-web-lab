import React from 'react';

export default function MenuCerradoSesionCerrado() {
  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative', overflow: 'hidden', backgroundColor: '#FFD700' /* Color amarillo del fondo */ }}>
      {/* Barra superior (fondo azul) */}
      <div style={{ height: '160px', backgroundColor: 'blue', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: '20px' }}>
        <button style={{ marginLeft: '10px', padding: '10px 20px', backgroundColor: 'yellow', border: 'none', cursor: 'pointer' }}>Iniciar Sesión</button>
        <button style={{ marginLeft: '10px', padding: '10px 20px', backgroundColor: 'yellow', border: 'none', cursor: 'pointer' }}>?</button>
      </div>

      {/* Barra lateral izquierda (fondo negro) que está por encima */}
      <div style={{ width: '160px', backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
        <div className="logo" style={{ marginBottom: '20px' }}>
          <img src="/cetys-logo.png" alt="Logo CETYS" style={{ width: '40px' }} />
        </div>
        <div className="icons" style={{ color: 'white' }}>
          <span>Icono 1</span>
          <span>Icono 2</span>
          <span>Icono 3</span>
          <span>Icono 4</span>
          <span>Icono 5</span>
        </div>
      </div>

      {/* Contenedor principal */}
      <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F7D117', height: 'calc(100vh - 160px)' }}>
        <img src="/lab.png" alt="Fondo Lab" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
      </div>
    </div>
  );
}
