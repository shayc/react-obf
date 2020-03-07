import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Scroll.module.css";

const invertDir = dir => (dir === "rtl" ? "ltr" : "rtl");

function Scroll(props) {
  const { children, className, dir, style, ...other } = props;

  const scrollRef = useRef();

  const scrollClassName = clsx(styles.root, className);
  const scrollStyle = { ...style, direction: invertDir(dir) };

  useEffect(() => {
    function scrollToEnd() {
      const node = scrollRef.current;

      if (node.scroll) {
        const isLTR = dir === "ltr";
        const scrollEnd = isLTR ? node.scrollWidth - node.offsetWidth : 0;

        node.scroll(scrollEnd, 0);
      }
    }

    scrollToEnd();
  }, [dir, children]);

  return (
    <div
      className={scrollClassName}
      style={scrollStyle}
      ref={scrollRef}
      {...other}
    >
      <div className={styles.container} dir={dir}>
        {children}
      </div>
    </div>
  );
}

Scroll.propTypes = {
  /**
   * Text direction.
   */
  dir: PropTypes.oneOf(["ltr", "rtl"])
};

Scroll.defaultProps = {
  dir: "ltr"
};

export default Scroll;
