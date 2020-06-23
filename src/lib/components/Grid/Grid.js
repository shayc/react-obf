import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import BaseGrid from "./BaseGrid";
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
    <div className={styles.root}>
      {Boolean(pages.length > 1) ? (
        pages.map((pageItems, i) => (
          <BaseGrid
            {...props}
            className={gridClassName}
            items={pageItems}
            key={i}
          />
        ))
      ) : (
        <BaseGrid {...props} />
      )}
    </div>
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
