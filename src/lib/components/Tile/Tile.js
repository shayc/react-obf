import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Tile.module.css";

function Tile(props) {
  const {
    backgroundColor,
    borderColor,
    children,
    className,
    component: ComponentProp,
    style,
    variant,
    ...other
  } = props;

  const tileProps = {};
  if (ComponentProp === "button") {
    tileProps.type = "button";
  }

  const isFolder = variant === "folder";

  const tileClassName = clsx(styles.root, className, {
    [styles.rootFolder]: isFolder
  });

  const tileStyle = {
    ...style,
    backgroundColor,
    borderColor
  };

  return (
    <ComponentProp
      className={tileClassName}
      style={tileStyle}
      {...tileProps}
      {...other}
    >
      {children}
    </ComponentProp>
  );
}

Tile.propTypes = {
  component: PropTypes.elementType,
  variant: PropTypes.oneOf(["button", "folder"])
};

Tile.defaultProps = {
  component: "button",
  variant: "button"
};

export default Tile;
