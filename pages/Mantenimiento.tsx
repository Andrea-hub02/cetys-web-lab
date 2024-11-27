import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Styles from "../styles/Mantenimiento.module.css";

const Mantenimiento = () => {
    const [isOpen, setIsOpen] = useState(false); // Estado para el calendario
    const [isPopupOpen, setIsPopupOpen] = useState(false); // Estado para el pop-up de mantenimiento
    const [material, setMaterial] = useState(null); // Estado del material buscado
    const [estado, setEstado] = useState("funcional"); // Estado inicial del material
    const [prestamo, setPrestamo] = useState("disponible"); // Estado inicial del préstamo
    const [idBusqueda, setIdBusqueda] = useState(""); // ID ingresado
    const [selectedDate, setSelectedDate] = useState(null); // Fecha seleccionada del calendario
    const [mantenimientos, setMantenimientos] = useState({
        "2024-11-10": [
            { id: "123", nombre: "Microscopio", estado: "funcional", mantenimiento: "completo" },
            { id: "124", nombre: "Telescopio", estado: "dañado", mantenimiento: "incompleto" },
        ],
        "2024-11-15": [
            { id: "125", nombre: "Proyector", estado: "funcional", mantenimiento: "completo" },
        ],
    });
    const [materialesCreados, setMaterialesCreados] = useState([]); // Lista de materiales creados

    const toggleCalendar = () => {
        setIsOpen(!isOpen); // Alterna el calendario
    };

    const togglePopup = () => {
        setIsOpen(false); // Cierra el calendario si está abierto
        setIsPopupOpen(!isPopupOpen); // Alterna el pop-up de mantenimiento
    };

    const buscarMaterial = () => {
        // Simular búsqueda en base de datos
        if (idBusqueda === "123") {
            setMaterial({ id: "123", nombre: "Microscopio", estado: "funcional", prestamo: "disponible" });
        } else if (idBusqueda === "124") {
            setMaterial({ id: "124", nombre: "Telescopio", estado: "dañado", prestamo: "ocupado" });
        } else {
            alert("Material no encontrado");
            setMaterial(null);
        }
    };

    const crearMaterial = () => {
        if (material) {
            // Agregar material a la lista de materiales creados
            setMaterialesCreados((prev) => [...prev, { ...material, estado, prestamo }]);
            // Limpiar el estado actual del material
            setMaterial(null);
            setEstado("funcional"); // Resetear estado
            setPrestamo("disponible"); // Resetear préstamo
            setIdBusqueda(""); // Resetea el campo de búsqueda
            setIsPopupOpen(false); // Cierra el pop-up
        }
    };

    const marcarMantenimientos = ({ date }: { date: Date }) => {
        const formattedDate = date.toISOString().split("T")[0];
        return mantenimientos[formattedDate] ? Styles.highlight : null;
    };

    const handleDayClick = (value: Date) => {
        const formattedDate = value.toISOString().split("T")[0];
        if (mantenimientos[formattedDate]) {
            setSelectedDate(formattedDate);
        } else {
            setSelectedDate(null);
        }
    };

    const resetSelectedDate = () => {
        setSelectedDate(null); // Resetea la fecha seleccionada
    };

    return (
        <div>
            <div className={Styles.mainContainer} style={{ maxHeight: selectedDate ? "800px" : "500px" }}>
                <h1>Bienvenido a Mantenimiento</h1>
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                    <button onClick={toggleCalendar} className={Styles.calendarButton}>
                        Calendario
                    </button>
                    <button onClick={togglePopup} className={Styles.mantenimientoButton}>
                        Realizar mantenimiento
                    </button>
                </div>
                {isOpen && (
                    <div className={Styles.calendarPopup}>
                        <button onClick={toggleCalendar} className={Styles.closeButton}>
                            Cerrar
                        </button>
                        <Calendar
                            tileClassName={marcarMantenimientos}
                            onClickDay={handleDayClick}
                        />
                    </div>
                )}
                {selectedDate && (
                    <div className={Styles.tablaContainer}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <h2>Mantenimientos del {selectedDate}</h2>
                            <button onClick={resetSelectedDate} className={Styles.closeButton}>
                                Cerrar detalles
                            </button>
                        </div>
                        <table className={Styles.tabla}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Estado</th>
                                    <th>Mantenimiento</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mantenimientos[selectedDate].map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.nombre}</td>
                                        <td>{item.estado === "funcional" ? "Funcional" : "Dañado"}</td>
                                        <td>{item.mantenimiento === "completo" ? "Completo" : "Incompleto"}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                {isPopupOpen && (
                    <div className={Styles.popup}>
                        <button onClick={togglePopup} className={Styles.closeButton}>
                            Cerrar
                        </button>
                        <h2>Buscar Material</h2>
                        <input
                            type="text"
                            placeholder="Ingrese ID del material"
                            value={idBusqueda}
                            onChange={(e) => setIdBusqueda(e.target.value)}
                            className={Styles.inputField}
                        />
                        <button onClick={buscarMaterial} className={Styles.searchButton}>
                            Buscar
                        </button>
                        {material && (
                            <div className={Styles.materialInfo}>
                                <h3>Información del material</h3>
                                <p>ID: {material.id}</p>
                                <p>Nombre: {material.nombre}</p>
                                <div className={Styles.estado}>
                                    <label>
                                        Estado:
                                        <input
                                            type="checkbox"
                                            checked={estado === "funcional"}
                                            onChange={() => setEstado(estado === "funcional" ? "dañado" : "funcional")}
                                        />
                                        {estado === "funcional" ? "Funcional" : "Dañado"}
                                    </label>
                                </div>
                                <div className={Styles.estado}>
                                    <label>
                                        Préstamo:
                                        <input
                                            type="checkbox"
                                            checked={prestamo === "disponible"}
                                            onChange={() =>
                                                setPrestamo(prestamo === "disponible" ? "ocupado" : "disponible")
                                            }
                                        />
                                        {prestamo === "disponible" ? "Disponible" : "Ocupado"}
                                    </label>
                                </div>
                                <button onClick={crearMaterial} className={Styles.createButton}>
                                    Crear
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
            {materialesCreados.length > 0 && (
                <div className={Styles.createdContainer}>
                    <h2>Materiales Creados</h2>
                    <table className={Styles.tabla}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Estado</th>
                                <th>Préstamo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {materialesCreados.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.nombre}</td>
                                    <td>{item.estado === "funcional" ? "Funcional" : "Dañado"}</td>
                                    <td>{item.prestamo === "disponible" ? "Disponible" : "Ocupado"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Mantenimiento;