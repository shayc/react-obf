import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Row.module.css";

function Row(props) {
  const { className, ...other } = props;
  const rowClassName = clsx(styles.root, className);

  return <div className={rowClassName} {...other} />;
}

Row.propTypes = {
  /**
   * Row content.
   */
  children: PropTypes.node
};

export default Row;
