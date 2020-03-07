/**
 * Create an empty grid from rows and columns
 *
 * @param {number} rows number of rows
 * @param {number} columns number of columns
 */
function createEmptyGrid(rows, columns) {
  const grid = [...Array(Number(rows))].map(() => [...Array(Number(columns))]);

  return grid;
}

function fillEmptyGridCells(grid, items) {
  const itemQueue = [...items];

  return grid.map(row =>
    row.map(item => {
      return item || itemQueue.shift();
    })
  );
}

function iterateGridItems(grid, callback) {
  grid.forEach((row, rowIndex) => {
    row.forEach((item, columnIndex) => {
      callback(item, rowIndex, columnIndex);
    });
  });
}

function sortGrid({ columns, rows, order, items }) {
  const grid = createEmptyGrid(rows, columns);
  const itemsToSort = [...items];

  iterateGridItems(order, (id, rowIndex, columnIndex) => {
    const itemIndex = itemsToSort.findIndex(item => item.id === id);
    const itemExists = itemIndex > -1;

    const exceedsBoundaries = rowIndex >= rows || columnIndex >= columns;

    if (itemExists && !exceedsBoundaries) {
      const item = itemsToSort.splice(itemIndex, 1)[0];
      grid[rowIndex][columnIndex] = item;
    }
  });

  return fillEmptyGridCells(grid, itemsToSort);
}

function isEmptyArray(array) {
  return array.every(value => !value);
}

export { createEmptyGrid, sortGrid, isEmptyArray };
