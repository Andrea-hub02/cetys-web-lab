import React, { useState } from 'react';

// Definimos el tipo de solicitud
interface Solicitud {
    id: number;
    usuario: string;
    matricula: string;
    producto: string;
    fecha: string;
    fechaHasta: string;
    estado: string;
}

export default function Notificaciones() {
    const [solicitudes, setSolicitudes] = useState<Solicitud[]>([
        {
            id: 1,
            usuario: 'Juan Pérez',
            matricula: 'A001',
            producto: 'Laptop',
            fecha: '2024-11-18 10:00 AM',
            fechaHasta: '2024-11-25 10:00 AM',
            estado: 'pendiente',
        },
        {
            id: 2,
            usuario: 'Ana García',
            matricula: 'A002',
            producto: 'Proyector',
            fecha: '2024-11-18 10:30 AM',
            fechaHasta: '2024-11-30 10:30 AM',
            estado: 'pendiente',
        },
    ]);

    const [buscador, setBuscador] = useState<string>('');
    const [mostrarModal, setMostrarModal] = useState<boolean>(false);
    const [justificacion, setJustificacion] = useState<string>('');
    const [solicitudSeleccionada, setSolicitudSeleccionada] = useState<Solicitud | null>(null);

    const aceptarSolicitud = (solicitud: Solicitud) => {
        const fechaInicio = new Date(solicitud.fecha);
        const fechaFin = new Date(solicitud.fechaHasta);
        const diferenciaDias = (fechaFin.getTime() - fechaInicio.getTime()) / (1000 * 60 * 60 * 24);

        if (diferenciaDias > 7) {
            setSolicitudSeleccionada(solicitud);
            setMostrarModal(true);
        } else {
            setSolicitudes(solicitudes.map((s) =>
                s.id === solicitud.id ? { ...s, estado: 'aceptada' } : s
            ));
        }
    };

    const enviarJustificacion = () => {
        if (justificacion.trim() !== '' && solicitudSeleccionada) {
            setSolicitudes(solicitudes.map((s) =>
                s.id === solicitudSeleccionada.id ? { ...s, estado: 'aceptada' } : s
            ));
            setMostrarModal(false);
            setJustificacion('');
        } else {
            alert('Por favor, escribe una justificación.');
        }
    };

    const rechazarSolicitud = (id: number) => {
        setSolicitudes(solicitudes.map((solicitud) =>
            solicitud.id === id ? { ...solicitud, estado: 'rechazada' } : solicitud
        ));
    };

    const solicitudesFiltradas = solicitudes.filter((solicitud) =>
        solicitud.matricula.toLowerCase().includes(buscador.toLowerCase())
    );

    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <div
                style={{
                    maxWidth: '1000px',
                    width: '100%',
                    background: '#fff',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                }}
            >
                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Notificaciones de Solicitudes</h1>
                <p style={{ textAlign: 'center', marginBottom: '20px' }}>
                    Total de solicitudes pendientes: {solicitudes.filter((s) => s.estado === 'pendiente').length}
                </p>
                <input
                    type="text"
                    placeholder="Buscar por matrícula"
                    value={buscador}
                    onChange={(e) => setBuscador(e.target.value)}
                    style={{
                        marginBottom: '20px',
                        padding: '10px',
                        width: '100%',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                    }}
                />
                <div
                    style={{
                        height: '300px',
                        overflowY: 'auto',
                    }}
                >
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f8f9fa', textAlign: 'left' }}>
                                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Usuario</th>
                                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Matrícula</th>
                                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Producto</th>
                                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Fecha</th>
                                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Hasta</th>
                                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Estado</th>
                                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {solicitudesFiltradas.map((solicitud) => (
                                <tr key={solicitud.id} style={{ textAlign: 'left' }}>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{solicitud.usuario}</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{solicitud.matricula}</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{solicitud.producto}</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{solicitud.fecha}</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{solicitud.fechaHasta}</td>
                                    <td
                                        style={{
                                            padding: '10px',
                                            border: '1px solid #ddd',
                                            color:
                                                solicitud.estado === 'pendiente'
                                                    ? 'orange'
                                                    : solicitud.estado === 'aceptada'
                                                        ? 'green'
                                                        : 'red',
                                        }}
                                    >
                                        {solicitud.estado}
                                    </td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                                        {solicitud.estado === 'pendiente' && (
                                            <div style={{ display: 'flex', gap: '10px' }}>
                                                <button
                                                    onClick={() => aceptarSolicitud(solicitud)}
                                                    style={{
                                                        padding: '5px 10px',
                                                        backgroundColor: 'green',
                                                        color: '#fff',
                                                        border: 'none',
                                                        borderRadius: '4px',
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    Aceptar
                                                </button>
                                                <button
                                                    onClick={() => rechazarSolicitud(solicitud.id)}
                                                    style={{
                                                        padding: '5px 10px',
                                                        backgroundColor: 'red',
                                                        color: '#fff',
                                                        border: 'none',
                                                        borderRadius: '4px',
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    Rechazar
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {mostrarModal && (
                <div
                    style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: '#fff',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        zIndex: 1000,
                    }}
                >
                    <h2>Justificación para Préstamo Prolongado</h2>
                    <textarea
                        value={justificacion}
                        onChange={(e) => setJustificacion(e.target.value)}
                        placeholder="Escribe la justificación aquí..."
                        style={{
                            width: '100%',
                            height: '100px',
                            margin: '10px 0',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                        }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button
                            onClick={enviarJustificacion}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: 'green',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            Enviar
                        </button>
                        <button
                            onClick={() => setMostrarModal(false)}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: 'red',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
