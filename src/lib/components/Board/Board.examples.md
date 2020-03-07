Board examples:

###### Board

```jsx
import { Board, Tile, Pictogram, useBoard } from "@shayc/react-obf";
import ck12 from "../../obf/ck12.json";

const { board, loadBoard } = useBoard(ck12);

function renderButton(button) {
  const variant = button.load_board ? "folder" : "button";

  return (
    <Tile
      backgroundColor={button.background_color}
      borderColor={button.border_color}
      onClick={event => {
        if (button.load_board) {
          loadBoard(button.load_board);
        }
      }}
      variant={variant}
    >
      <Pictogram label={button.label} src={button.image} />
    </Tile>
  );
}

<div style={{ height: "320px" }}>
  <Board
    buttons={board.buttons}
    grid={board.grid}
    renderButton={renderButton}
  />
</div>;
```
