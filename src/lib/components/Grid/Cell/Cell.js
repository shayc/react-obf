import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Cell.module.css";

function Cell(props) {
  const { className, ...other } = props;
  const cellClassName = clsx(styles.root, className);

  return <div className={cellClassName} {...other} />;
}

Cell.propTypes = {
  /**
   * Cell content.
   */
  children: PropTypes.node
};

export default Cell;
