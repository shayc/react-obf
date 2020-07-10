import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import GridBase from "./GridBase";
import styles from "./Grid.module.css";

function chunks(array, size) {
  const newArray = [...array];
  const results = [];

  while (newArray.length) {
    results.push(newArray.splice(0, size));
  }
  return results;
}

function Grid(props) {
  const { className, columns, items, rows } = props;

  const itemsPerPage = rows * columns;
  const pages = chunks(items, itemsPerPage);

  const gridClassName = clsx(styles.grid, className);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.root}>
        {Boolean(pages.length > 1) ? (
          pages.map((pageItems, i) => (
            <GridBase
              {...props}
              className={gridClassName}
              items={pageItems}
              key={i}
            />
          ))
        ) : (
          <GridBase {...props} />
        )}
      </div>
    </DndProvider>
  );
}

Grid.propTypes = {
  /**
   * Number of columns.
   */
  columns: PropTypes.number.isRequired,
  /**
   * Items to render.
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Item ID.
       */
      id: PropTypes.string.isRequired,
    })
  ),
  onItemDrop: PropTypes.func.isRequired,
  /**
   * Items order by ID.
   */
  order: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  /**
   * Item empty cell.
   */
  renderEmptyCell: PropTypes.func.isRequired,
  /**
   * Item renderer.
   */
  renderItem: PropTypes.func.isRequired,
  /**
   * Number of rows.
   */
  rows: PropTypes.number.isRequired,
};

export default Grid;
