import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Pictogram.module.css";

function Pictogram(props) {
  const { className, label, labelPosition, src } = props;

  const pictogramClassName = clsx(styles.root, className, {
    [styles.isColumnReverse]: labelPosition === "top"
  });

  return (
    <div className={pictogramClassName}>
      <div className={styles.imgContainer}>
        {src && <img className={styles.img} src={src} alt="" />}
      </div>

      <div className={styles.label}>
        <span>{label}</span>
      </div>
    </div>
  );
}

Pictogram.propTypes = {
  /**
   * Label to render.
   */
  label: PropTypes.string.isRequired,
  /**
   * Label position.
   */
  labelPosition: PropTypes.oneOf(["top", "bottom"]),
  /**
   * Image source.
   */
  src: PropTypes.string
};

Pictogram.defaultProps = {
  labelPosition: "bottom"
};

export default Pictogram;
