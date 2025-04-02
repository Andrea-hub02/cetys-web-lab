// pages/Mantenimiento.tsx
import React, { useState } from 'react';
import { NextPage } from 'next';
import { Calendar } from 'react-modern-calendar-datepicker';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import styles from '../styles/Mantenimiento.module.css';

interface MaintenanceRecord {
  idMantenimiento: string;
  equipo: string;
  fecha: Date;
  descripcion: string;
}

const Mantenimiento: NextPage = () => {
  // Registros de mantenimiento de ejemplo
  const [maintenanceRecords, setMaintenanceRecords] = useState<MaintenanceRecord[]>([
    {
      idMantenimiento: '001',
      equipo: 'PC-1234',
      fecha: new Date(2025, 3, 2),
      descripcion: 'Cambio de disco duro',
    },
    {
      idMantenimiento: '002',
      equipo: 'PC-5678',
      fecha: new Date(2025, 3, 2),
      descripcion: 'Limpieza de ventiladores',
    },
    {
      idMantenimiento: '003',
      equipo: 'PC-ABCD',
      fecha: new Date(2025, 3, 5),
      descripcion: 'Cambio de memoria RAM',
    },
  ]);

  // react-modern-calendar-datepicker usa un objeto { year, month, day }
  const [selectedDay, setSelectedDay] = useState<any>(null);

  const handleDayChange = (day: any) => {
    setSelectedDay(day);
  };

  // Convertimos el objeto seleccionado a un objeto Date
  const selectedDate = selectedDay
    ? new Date(selectedDay.year, selectedDay.month - 1, selectedDay.day)
    : new Date();

  // Filtramos los registros para la fecha seleccionada
  const dailyRecords = maintenanceRecords.filter(
    (record) => record.fecha.toDateString() === selectedDate.toDateString()
  );

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Bienvenido a Mantenimiento</h1>
      </div>

      <div className={styles.mainLayout}>
        {/* Contenedor del calendario */}
          <Calendar
            value={selectedDay}
            onChange={handleDayChange}
            calendarClassName="custom-calendar" // Puedes usar esta clase para personalizar aún más en tu global CSS
            colorPrimary="black" // Color primario para destacar el día seleccionado
            shouldHighlightWeekends
          />

        {/* Panel dinámico: tabla o mensaje */}
        <div className={styles.panelDinamico}>
          {dailyRecords.length === 0 ? (
            <p className={styles.noRecords}>
              No hay registros de mantenimiento para este día...
            </p>
          ) : (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHeader}>ID</th>
                  <th className={styles.tableHeader}>Equipo</th>
                  <th className={styles.tableHeader}>Fecha</th>
                  <th className={styles.tableHeader}>Descripción</th>
                </tr>
              </thead>
              <tbody>
                {dailyRecords.map((record) => (
                  <tr key={record.idMantenimiento}>
                    <td className={styles.tableCell}>{record.idMantenimiento}</td>
                    <td className={styles.tableCell}>{record.equipo}</td>
                    <td className={styles.tableCell}>
                      {record.fecha.toLocaleDateString()}
                    </td>
                    <td className={styles.tableCell}>{record.descripcion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <div className={styles.btnContainer}>
        <button className={styles.btnRealizarMantenimiento}>
          Realizar Mantenimiento
        </button>
      </div>
    </div>
  );
};

export default Mantenimiento;
