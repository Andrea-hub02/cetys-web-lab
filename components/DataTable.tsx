import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

// Define las columnas basadas en los campos requeridos
const columns: GridColDef[] = [
  { field: 'ID_Material', headerName: 'ID Material', width: 100 },
  { field: 'ITEM', headerName: 'Item', width: 80 },
  { field: 'ID_Laboratorio', headerName: 'ID Laboratorio', width: 130 },
  { field: 'DESCRIPCION', headerName: 'Descripción', width: 200 },
  { field: 'MODELO', headerName: 'Modelo', width: 120 },
  { field: 'No_SERIE', headerName: 'No. Serie', width: 120 },
  { field: 'No_INVENTARIO', headerName: 'No. Inventario', width: 140 },
  { field: 'ESTADO', headerName: 'Estado', width: 100 },
  { field: 'ADQUISICION', headerName: 'Adquisición', width: 130 },
  { field: 'EXISTENCIA', headerName: 'Existencia', width: 100 },
  { field: 'No_PRESTAMO', headerName: 'No. Préstamo', width: 130 },
  { field: 'UBICACION', headerName: 'Ubicación', width: 140 },
  { field: 'IMAGEN', headerName: 'Imagen', width: 150 },
];

// Datos dummies (6 registros)
const rows = [
  {
    id: 1,
    ID_Material: 101,
    ITEM: 'A001',
    ID_Laboratorio: 'Lab01',
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
  {
    id: 2,
    ID_Material: 102,
    ITEM: 'A002',
    ID_Laboratorio: 'Lab02',
    DESCRIPCION: 'Centrífuga',
    MODELO: 'CEN-3000',
    No_SERIE: '56789',
    No_INVENTARIO: 'INV-002',
    ESTADO: 'Inactivo',
    ADQUISICION: '2019-08-15',
    EXISTENCIA: 5,
    No_PRESTAMO: 2,
    UBICACION: 'Almacén 2',
    IMAGEN: 'imagen2.png',
  },
  {
    id: 3,
    ID_Material: 103,
    ITEM: 'A003',
    ID_Laboratorio: 'Lab03',
    DESCRIPCION: 'Espectrofotómetro',
    MODELO: 'SPEC-700',
    No_SERIE: '11223',
    No_INVENTARIO: 'INV-003',
    ESTADO: 'Mantenimiento',
    ADQUISICION: '2021-02-20',
    EXISTENCIA: 3,
    No_PRESTAMO: 1,
    UBICACION: 'Laboratorio A',
    IMAGEN: 'imagen3.png',
  },
  {
    id: 4,
    ID_Material: 104,
    ITEM: 'A004',
    ID_Laboratorio: 'Lab04',
    DESCRIPCION: 'Balanza Analítica',
    MODELO: 'BA-250',
    No_SERIE: '44556',
    No_INVENTARIO: 'INV-004',
    ESTADO: 'Activo',
    ADQUISICION: '2018-11-05',
    EXISTENCIA: 7,
    No_PRESTAMO: 3,
    UBICACION: 'Laboratorio B',
    IMAGEN: 'imagen4.png',
  },
  {
    id: 5,
    ID_Material: 105,
    ITEM: 'A005',
    ID_Laboratorio: 'Lab05',
    DESCRIPCION: 'Ph-Metro',
    MODELO: 'PHM-500',
    No_SERIE: '77889',
    No_INVENTARIO: 'INV-005',
    ESTADO: 'Activo',
    ADQUISICION: '2022-01-10',
    EXISTENCIA: 4,
    No_PRESTAMO: 0,
    UBICACION: 'Laboratorio C',
    IMAGEN: 'imagen5.png',
  },
  {
    id: 6,
    ID_Material: 106,
    ITEM: 'A006',
    ID_Laboratorio: 'Lab06',
    DESCRIPCION: 'Cámara Termográfica',
    MODELO: 'TH-600',
    No_SERIE: '99001',
    No_INVENTARIO: 'INV-006',
    ESTADO: 'Inactivo',
    ADQUISICION: '2023-03-15',
    EXISTENCIA: 2,
    No_PRESTAMO: 0,
    UBICACION: 'Almacén 3',
    IMAGEN: 'imagen6.png',
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{
          border: 0,
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 'bold', // Aplica negrita a los encabezados
          },
        }}
      />
    </Paper>
  );
}
