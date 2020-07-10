import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useDrag } from "react-dnd";

import styles from "./DraggableItem.module.css";

function DraggableItem(props) {
  const { className, id, style, type, ...other } = props;

  const [{ opacity }, drag] = useDrag({
    item: { id, type },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });

  const cellClassName = clsx(styles.root, className);

  return (
    <div
      className={cellClassName}
      style={{ ...style, opacity }}
      {...other}
      ref={drag}
    />
  );
}

DraggableItem.propTypes = {
  /**
   * DraggableItem content.
   */
  children: PropTypes.node,
};

export default DraggableItem;
