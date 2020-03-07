import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import Board from "../Board";
import Tile from "../Tile";
import Pictogram from "../Pictogram";
import Output from "../Output";
import NavBar from "../NavBar";
import styles from "./BoardPlayer.module.css";

function BoardPlayer(props) {
  const {
    buttons,
    className,
    dir,
    nav,
    onButtonClick,
    onOutputClick,
    output,
    id,
    grid,
    name
  } = props;

  function handleButtonClick(button) {
    return event => {
      onButtonClick(button);
    };
  }

  function renderBoardButton(button) {
    const variant = button.load_board ? "folder" : "button";
    const key = `${id}-${button.id}`;

    return (
      <Tile
        backgroundColor={button.background_color}
        borderColor={button.border_color}
        onClick={handleButtonClick(button)}
        variant={variant}
        key={key}
      >
        <Pictogram label={button.label} src={button.image} />
      </Tile>
    );
  }

  function renderOutputValue(value) {
    return <Pictogram label={value.label} src={value.image} />;
  }

  const boardPlayerClassName = clsx(styles.root, className);

  return (
    <div className={boardPlayerClassName} dir={dir}>
      <Output
        className={styles.output}
        dir={dir}
        onBackspaceClick={output.pop}
        onClearClick={output.clear}
        onClick={onOutputClick}
        renderValue={renderOutputValue}
        values={output.values}
      />

      <NavBar
        backDisabled={nav.backDisabled}
        forwardDisabled={nav.forwardDisabled}
        onBackClick={nav.goBack}
        onForwardClick={nav.goForward}
        title={name}
      />

      <Board
        className={styles.board}
        buttons={buttons}
        grid={grid}
        renderButton={renderBoardButton}
      />
    </div>
  );
}

BoardPlayer.propTypes = {
  /**
   * Buttons to render.
   */
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Button ID.
       */
      id: PropTypes.string.isRequired
    })
  ),
  /**
   * Direction.
   */
  dir: PropTypes.oneOf(["ltr", "rtl"]),
  /**
   * Grid props.
   */
  grid: PropTypes.shape({
    /**
     * Number of columns.
     */
    columns: PropTypes.number.isRequired,
    /**
     * Items order by ID.
     */
    order: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    /**
     * Number of rows.
     */
    rows: PropTypes.number.isRequired
  }),
  /**
   * Name.
   */
  name: PropTypes.string,
  /**
   * Navigation.
   */
  nav: PropTypes.shape({
    backDisabled: PropTypes.bool,
    forwardDisabled: PropTypes.bool,
    goBack: PropTypes.func.isRequired,
    goForward: PropTypes.func.isRequired
  }),
  /**
   * Callback, fired when button is clicked.
   */
  onButtonClick: PropTypes.func,
  /**
   * Callback, fired when output is clicked.
   */
  onOutputClick: PropTypes.func,
  /**
   * Output.
   */
  output: PropTypes.shape({
    clear: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
    values: PropTypes.array.isRequired
  }).isRequired
};

BoardPlayer.defaultProps = {
  buttons: [],
  dir: "ltr",
  grid: {}
};

export default BoardPlayer;
