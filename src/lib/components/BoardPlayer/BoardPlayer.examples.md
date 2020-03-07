BoardPlayer examples:

###### BoardPlayer

```jsx
import { BoardPlayer, useBoard } from "@shayc/react-obf";

import obfExample from "../../obf/lots-of-stuff.json";

function play(sound) {
  const audio = new Audio(sound);
  audio.play();
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

const deps = { play, speak };

const {
  board,
  handleButtonClick,
  handleOutputClick,
  openFiles,
  nav,
  output
} = useBoard(obfExample, deps);

<div
  style={{
    height: "600px",
    display: "flex",
    flexDirection: "column",
    background: "#eee"
  }}
>
  <label>
    Import OBF/OBZ files:
    <input
      type="file"
      accept=".obf, .obz"
      onChange={event => {
        openFiles(event.target.files);
      }}
    />
  </label>

  <BoardPlayer
    buttons={board.buttons}
    grid={board.grid}
    name={board.name}
    nav={nav}
    output={output}
    onButtonClick={handleButtonClick}
    onOutputClick={handleOutputClick}
  />
</div>;
```
