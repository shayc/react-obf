import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import * as OBF from "@shayc/obf-utils";

import Row from "./Row/Row";
import DroppableCell from "./DroppableCell/DroppableCell";
import DraggableItem from "./DraggableItem/DraggableItem";
import styles from "./GridBase.module.css";

function GridBase(props) {
  const {
    className,
    columns,
    items,
    onItemDrop,
    order,
    renderEmptyCell,
    renderItem,
    rows,
    ...other
  } = props;

  const gridClassName = clsx(styles.root, className);

  const grid = OBF.sortGrid({ columns, rows, order, items });

  let itemIndex = 0;

  return (
    <div className={gridClassName} {...other}>
      {grid.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((item, cellIndex) => {
            return (
              <DroppableCell
                key={cellIndex}
                column={cellIndex}
                row={rowIndex}
                accept={"item"}
                onDrop={onItemDrop}
              >
                {item ? (
                  <DraggableItem type={"item"} id={item.id}>
                    {renderItem(item, itemIndex++)}
                  </DraggableItem>
                ) : (
                  renderEmptyCell && renderEmptyCell()
                )}
              </DroppableCell>
            );
          })}
        </Row>
      ))}
    </div>
  );
}

GridBase.propTypes = {
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
   * Item renderer.
   */
  renderItem: PropTypes.func.isRequired,
  /**
   * Number of rows.
   */
  rows: PropTypes.number.isRequired,
};

GridBase.defaultProps = {
  items: [],
  order: [],
};

export default GridBase;
