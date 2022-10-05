import React from "react";

import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
const Table = (props) => {
  const { columns, sortColumn, onSort, data } = props;

  return (
    <table className="table  ">
      <thead>
        <TableHeader
          onSort={onSort}
          sortColumn={sortColumn}
          columns={columns}
        />
      </thead>
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
