import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows, columns } from "./data";
import Title from "../../Components/Title";

function Contacts() {
  return (
    <div style={{ height: 580 }}>
      <Title title="CONTACTS" subTitle="List of Contacts for Future Reference" />
      <DataGrid
        slots={{
          toolbar: GridToolbar,
        }}
        showToolbar
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </div>
  );
}

export default Contacts;
