import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./IconButton.module.css";

function IconButton(props) {
  const {
    className,
    children,
    disabled,
    label,
    title: titleProp,
    ...other
  } = props;

  const buttonClassName = clsx(styles.root, className);
  const title = !disabled ? titleProp || label : undefined;

  return (
    <button
      className={buttonClassName}
      aria-label={label}
      disabled={disabled}
      title={title}
      type="button"
      {...other}
    >
      {children}
    </button>
  );
}

IconButton.propTypes = {
  /**
   * If `true`, button is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Label.
   */
  label: PropTypes.string.isRequired
};

export default IconButton;
