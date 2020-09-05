import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

import "./styles.css";

function ReportTable({ tableColumns, tableData }) {
  return (
    <BootstrapTable
      keyField="id"
      hover={true}
      columns={tableColumns}
      data={tableData}
      classes="bootstrapTableStyle"
    />
  );
}

export default ReportTable;
