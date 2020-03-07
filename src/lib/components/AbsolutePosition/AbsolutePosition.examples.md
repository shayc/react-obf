AbsolutePosition examples:

###### AbsolutePosition

```jsx
import { AbsolutePosition, Pictogram, Tile } from "@shayc/react-obf";

const buttons = [
  {
    id: "1",
    label: "speak",
    image: "https://s3.amazonaws.com/opensymbols/libraries/arasaac/talk.png",
    left: 0.102,
    top: 0.2345,
    width: 0.48,
    height: 0.41
  },
  {
    id: "2",
    label: "with everyone",
    image:
      "https://s3.amazonaws.com/opensymbols/libraries/arasaac/group of people.png",
    left: 0.252,
    top: 0.6345,
    width: 0.18,
    height: 0.31
  }
];

function renderButton(button) {
  const variant = button.load_board ? "folder" : "button";

  return (
    <Tile
      backgroundColor={button.background_color}
      borderColor={button.border_color}
      variant={variant}
    >
      <Pictogram label={button.label} src={button.image} />
    </Tile>
  );
}

<div style={{ height: "300px" }}>
  <AbsolutePosition items={buttons} renderItem={renderButton} />
</div>;
```
