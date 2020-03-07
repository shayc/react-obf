import { useState } from "react";

function useGrid(grid) {
  const [columns, setColumns] = useState(grid.columns);
  const [rows, setRows] = useState(grid.rows);
  const [order, setOrder] = useState(grid.order);

  return { columns, order, rows, setColumns, setOrder, setRows };
}

export default useGrid;
