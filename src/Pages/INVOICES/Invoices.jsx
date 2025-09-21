import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { rows, columns } from "./data";
import Title from '../../Components/Title';

function Invoices() {
  return (
    <div style={{ height: 580 }}>
      <Title title="INVOICES" subTitle="List of Invoice Balances" />
      <DataGrid
        checkboxSelection
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </div>
  );
}

export default Invoices
