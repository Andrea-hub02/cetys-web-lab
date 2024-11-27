import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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

interface DataTableProps {
  data: any[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{
          border: 0,
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 'bold',
          },
        }}
      />
    </Paper>
  );
};

export default DataTable;
