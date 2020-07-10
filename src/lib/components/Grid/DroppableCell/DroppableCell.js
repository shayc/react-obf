import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useDrop } from "react-dnd";

import styles from "./DroppableCell.module.css";

function DroppableCell(props) {
  const { accept, className, onDrop, ...other } = props;

  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = isOver && canDrop;

  const cellClassName = clsx(styles.root, className, {
    [styles.isActive]: isActive,
  });

  return <div className={cellClassName} {...other} ref={drop} />;
}

DroppableCell.propTypes = {
  /**
   * DroppableCell content.
   */
  children: PropTypes.node,
};

export default DroppableCell;
