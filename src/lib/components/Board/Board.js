import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import * as OBF from "@shayc/obf-utils";

import Grid from "../Grid";
import AbsolutePosition from "../AbsolutePosition";
import styles from "./Board.module.css";

function Board(props) {
  const { buttons, className, grid, renderButton } = props;

  const boardClassName = clsx(styles.root, className);

  const shouldRenderAbsolutePosition = OBF.shouldButtonsPositionedAbsolute(
    buttons
  );

  const shouldRenderGrid =
    !shouldRenderAbsolutePosition && grid.columns && grid.rows;

  return (
    <div className={boardClassName}>
      {shouldRenderGrid && (
        <Grid
          columns={grid.columns}
          items={buttons}
          order={grid.order}
          renderItem={renderButton}
          rows={grid.rows}
        />
      )}

      {shouldRenderAbsolutePosition && (
        <AbsolutePosition items={buttons} renderItem={renderButton} />
      )}
    </div>
  );
}

Board.propTypes = {
  /**
   * Buttons to render.
   */
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Button ID.
       */
      id: PropTypes.string.isRequired
    })
  ),
  /**
   * Grid props.
   */
  grid: PropTypes.shape({
    /**
     * Number of columns.
     */
    columns: PropTypes.number.isRequired,
    /**
     * Order ID's
     */
    order: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    /**
     * Number of rows.
     */
    rows: PropTypes.number.isRequired
  }).isRequired,
  /**
   * Button renderer.
   */
  renderButton: PropTypes.func.isRequired
};

Board.defaultProps = {
  buttons: []
};

export default Board;
