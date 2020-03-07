import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { sortGrid } from "./utils";
import Row from "./Row/Row";
import Cell from "./Cell/Cell";
import styles from "./BaseGrid.module.css";

function BaseGrid(props) {
  const {
    className,
    columns,
    items,
    order,
    renderItem,
    rows,
    ...other
  } = props;
  const gridClassName = clsx(styles.root, className);

  const grid = sortGrid({ columns, rows, order, items });

  let itemIndex = 0;

  return (
    <div className={gridClassName} {...other}>
      {grid.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((item, cellIndex) => {
            return (
              <Cell key={cellIndex}>
                {item && renderItem(item, itemIndex++)}
              </Cell>
            );
          })}
        </Row>
      ))}
    </div>
  );
}

BaseGrid.propTypes = {
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
      id: PropTypes.string.isRequired
    })
  ),
  /**
   * Items order by ID.
   */
  order: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  /**
   * Item renderer.
   */
  renderItem: PropTypes.func.isRequired,
  /**
   * Number of rows.
   */
  rows: PropTypes.number.isRequired
};

BaseGrid.defaultProps = {
  items: [],
  order: []
};

export default BaseGrid;
