import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./AbsolutePosition.module.css";

function AbsolutePosition(props) {
  const { className, items, renderItem } = props;

  const absolutePositionClassName = clsx(styles.root, className);

  return (
    <div className={absolutePositionClassName}>
      {items.map((item, index) => {
        const { top, left, width, height } = item;

        const style = {
          position: "absolute",
          top: `${top * 100}%`,
          left: `${left * 100}%`,
          width: `${width * 100}%`,
          height: `${height * 100}%`
        };

        return (
          <div style={style} key={item.id} data-testid="item-container">
            {renderItem(item)}
          </div>
        );
      })}
    </div>
  );
}

AbsolutePosition.propTypes = {
  /**
   * Items to render.
   */
  items: PropTypes.arrayOf(
    /**
     * Position absolute.
     */
    PropTypes.shape({
      /**
       * ID.
       */
      id: PropTypes.string.isRequired,
      /**
       *  Percentage (from 0.0 and 1.0).
       */
      top: PropTypes.number.isRequired,
      /**
       *  Percentage (from 0.0 and 1.0).
       */
      left: PropTypes.number.isRequired,
      /**
       *  Percentage (from 0.0 and 1.0).
       */
      width: PropTypes.number.isRequired,
      /**
       *  Percentage (from 0.0 and 1.0).
       */
      height: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  /**
   * Item renderer.
   */
  renderItem: PropTypes.func.isRequired
};

export default AbsolutePosition;
