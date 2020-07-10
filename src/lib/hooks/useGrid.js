import { useState } from "react";

function useGrid(grid) {
  const [columns, setColumns] = useState(grid.columns);
  const [rows, setRows] = useState(grid.rows);
  const [order, setOrder] = useState(grid.order);

  function moveItem(item, cell) {
    const mappedOrder = order.map((row) => {
      return row.map((cell) => {
        return cell;
      });
    });

    const oldItem = mappedOrder[cell.row][cell.column];

    for (let i = 0; i < mappedOrder.length; i++) {
      const itemIndex = mappedOrder[i].indexOf(item.id);

      if (itemIndex !== -1) {
        mappedOrder[i][itemIndex] = oldItem;
        break;
      }
    }

    mappedOrder[cell.row][cell.column] = item.id;

    setOrder(mappedOrder);
  }

  return { columns, moveItem, order, rows, setColumns, setOrder, setRows };
}

export default useGrid;
