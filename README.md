[![Build Status](https://travis-ci.com/shayc/react-obf.svg?branch=master)](https://travis-ci.com/shayc/react-obf)
[![Coverage Status](https://coveralls.io/repos/github/shayc/react-obf/badge.svg?branch=master)](https://coveralls.io/github/shayc/react-obf?branch=master)
[![dependencies Status](https://david-dm.org/shayc/react-obf/status.svg)](https://david-dm.org/shayc/react-obf)
[![devDependencies Status](https://david-dm.org/shayc/react-obf/dev-status.svg)](https://david-dm.org/shayc/react-obf?type=dev)

# react-obf

React library for building [Open Board Format](https://www.openboardformat.org) AAC applications.

The library provides a set of components and hooks:

- `<Board />`
- `<NavBar />`
- `<Output />`
- `useBoard`
- `useNavigation`
- `useOutput`

## Installation

React Open Board Format is available as an [npm package](https://www.npmjs.com/package/@shayc/react-obf)

```sh
npm i @shayc/react-obf
```

## Basic Usage

```jsx
import React from "react";
import { BoardPlayer, useBoard } from "@shayc/react-obf";
import boardSet from "./obf/example-boardset.json";

function play(url) {
  const audio = new Audio(url);
  audio.play();
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

const deps = { play, speak };

function BasicExample(props) {
  const { board, handleButtonClick, handleOutputClick, nav, output } = useBoard(
    boardSet,
    deps
  );

  return (
    <BoardPlayer
      buttons={board.buttons}
      grid={board.grid}
      name={board.name}
      nav={nav}
      output={output}
      onButtonClick={handleButtonClick}
      onOutputClick={handleOutputClick}
    />
  );
}
```

## Advanced Usage

```jsx
import React from "react";
import {
  Board,
  NavBar,
  Output,
  Pictogram,
  Tile,
  useBoard
} from "@shayc/react-obf";

import boardSet from "./obf/example-boardset.json";

function play(url) {
  const audio = new Audio(url);
  audio.play();
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

const deps = { play, speak };

function AdvancedExample(props) {
  const { board, handleButtonClick, nav, output } = useBoard(boardSet, deps);

  function renderOutputValue(value) {
    return <Pictogram label={value.label} src={value.image} />;
  }

  function renderBoardButton(button) {
    const variant = button.load_board ? "folder" : "button";
    const id = `${board.id}-${button.id}`;

    return (
      <Tile
        backgroundColor={button.background_color}
        borderColor={button.border_color}
        key={id}
        onClick={() => handleButtonClick(button)}
        variant={variant}
      >
        <Pictogram label={button.label} src={button.image} />
      </Tile>
    );
  }

  return (
    <div>
      <Output
        values={output.values}
        renderValue={renderOutputValue}
        onBackspaceClick={output.pop}
        onClearClick={output.clear}
      />

      <NavBar
        backDisabled={nav.backDisabled}
        forwardDisabled={nav.forwardDisabled}
        onBackClick={nav.goBack}
        onForwardClick={nav.goForward}
        title={board.name}
      />

      <Board
        buttons={board.buttons}
        grid={board.grid}
        renderButton={renderBoardButton}
      />
    </div>
  );
}
```

## Changelog

Recently Updated?
Please read the [changelog](https://github.com/shayc/react-obf/releases).

## Roadmap

The future plans and high priority features and enhancements can be found in the [roadmap](https://github.com/shayc/react-obf/roadmap.md) file.

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
