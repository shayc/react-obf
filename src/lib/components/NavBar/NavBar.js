import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import ArrowBackSvg from "./ArrowBackSvg";
import ArrowForwardSvg from "./ArrowForwardSvg";
import IconButton from "../IconButton";
import styles from "./NavBar.module.css";

function NavBar(props) {
  const {
    actions,
    className,
    backDisabled,
    forwardDisabled,
    onBackClick,
    onForwardClick,
    title
  } = props;

  const navBarClassName = clsx(styles.root, className);

  return (
    <div className={navBarClassName}>
      <IconButton
        disabled={backDisabled}
        label="Back"
        title="Go back"
        onClick={onBackClick}
      >
        <ArrowBackSvg />
      </IconButton>
      <IconButton
        disabled={forwardDisabled}
        label="Forward"
        title="Go forward"
        onClick={onForwardClick}
      >
        <ArrowForwardSvg />
      </IconButton>
      <span className={styles.title}>{title}</span>
      <span>{actions}</span>
    </div>
  );
}

NavBar.propTypes = {
  /**
   * If `true`, back button is disabled.
   */
  backDisabled: PropTypes.bool,
  /**
   * If `true`, forward button is disabled.
   */
  forwardDisabled: PropTypes.bool,
  /**
   * Callback, fired when back button is clicked.
   */
  onBackClick: PropTypes.func.isRequired,
  /**
   * Callback, fired when forward button is clicked.
   */
  onForwardClick: PropTypes.func.isRequired,
  /**
   * Title to render.
   */
  title: PropTypes.node
};

NavBar.defaultProps = {};

export default NavBar;
