Tile examples:

###### Tile

```js
import { Pictogram, Tile } from "@shayc/react-obf";

<div style={{ height: "128px", display: "flex" }}>
  <Tile>
    <Pictogram
      label="I"
      src="https://s3.amazonaws.com/opensymbols/libraries/arasaac/I.png"
    />
  </Tile>
  <Tile
    backgroundColor="rgb(204, 255, 170)"
    borderColor="rgb(102, 221, 0)"
    onClick={() => {
      console.log("clicked");
    }}
  >
    <Pictogram
      label="want"
      src="https://s3.amazonaws.com/opensymbols/libraries/arasaac/to want.png"
    />
  </Tile>
  <Tile
    backgroundColor="rgb(170, 204, 255)"
    borderColor="rgb(17, 112, 255)"
    onClick={() => {
      console.log("clicked");
    }}
    variant="folder"
  >
    <Pictogram
      label="drink"
      src="https://s3.amazonaws.com/opensymbols/libraries/arasaac/to drink.png"
    />
  </Tile>
</div>;
```
