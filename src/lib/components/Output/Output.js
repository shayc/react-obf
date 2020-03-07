import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import IconButton from "../IconButton";
import BackspaceSvg from "./BackspaceSvg";
import ClearSvg from "./ClearSvg";

import Scroll from "./Scroll/Scroll";
import styles from "./Output.module.css";

const KeyCodes = {
  enter: 13,
  space: 32
};

function Output(props) {
  const {
    backspaceButton,
    className,
    clearButton,
    dir,
    onBackspaceClick,
    onClearClick,
    onClick,
    renderValue,
    values
  } = props;

  function handleKeyDown(event) {
    if (event.keyCode === KeyCodes.space) {
      event.preventDefault();
    }
  }

  function handleKeyUp(event) {
    switch (event.keyCode) {
      // fall through
      case KeyCodes.enter:
      case KeyCodes.space:
        onClick && onClick();
        break;
      default:
      // no default
    }
  }

  function renderClearButton() {
    const disabled = !values.length;

    const style = {
      visibility: disabled ? "hidden" : "visible"
    };

    const clearButtonProps = {
      disabled,
      style,
      onClick: onClearClick
    };

    return clearButton ? (
      React.cloneElement(clearButton, clearButtonProps)
    ) : (
      <IconButton {...clearButtonProps} label="Clear">
        <ClearSvg />
      </IconButton>
    );
  }

  function renderBackspaceButton() {
    const { dir } = props;
    const isRTL = dir === "rtl";

    const backspaceButtonProps = {
      onClick: onBackspaceClick
    };
    const backspaceSvgClassName = clsx({
      [styles.flipHorizontal]: isRTL
    });

    return backspaceButton ? (
      React.cloneElement(backspaceButton, backspaceButtonProps)
    ) : (
      <IconButton {...backspaceButtonProps} label="Backspace">
        <BackspaceSvg className={backspaceSvgClassName} />
      </IconButton>
    );
  }

  const outputClassName = clsx(styles.root, className);
  const tabIndex = values.length ? "0" : "-1";
  const role = values.length ? "button" : "";

  return (
    <div className={outputClassName} dir={dir}>
      <Scroll
        className={styles.container}
        dir={dir}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        role={role}
        tabIndex={tabIndex}
        data-testid="scroll-container"
      >
        {values.map((value, index) => (
          <div className={styles.value} key={index}>
            {renderValue(value)}
          </div>
        ))}
      </Scroll>

      {renderClearButton()}
      {renderBackspaceButton()}
    </div>
  );
}

Output.propTypes = {
  /**
   * Backspace button element.
   */
  backspaceButton: PropTypes.element,
  /**
   * Clear button element.
   */
  clearButton: PropTypes.element,
  /**
   * Direction.
   */
  dir: PropTypes.oneOf(["ltr", "rtl"]),
  /**
   * Callback, fired when backspace button is clicked.
   */
  onBackspaceClick: PropTypes.func.isRequired,
  /**
   * Callback, fired when clear button is clicked.
   */
  onClearClick: PropTypes.func.isRequired,
  /**
   * Callback, fired when output is clicked.
   */
  onClick: PropTypes.func,
  /**
   * Value renderer.
   */
  renderValue: PropTypes.func.isRequired,
  /**
   * Values to render.
   */
  values: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default Output;
