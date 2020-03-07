Basic Output:

```jsx
import { Pictogram, useOutput } from "@shayc/react-obf";

const values = [
  {
    label: "speak",
    src: "https://s3.amazonaws.com/opensymbols/libraries/arasaac/talk.png"
  },
  {
    label: "with everyone",
    src:
      "https://s3.amazonaws.com/opensymbols/libraries/arasaac/group of people.png"
  }
];

const output = useOutput(values);

function renderValue(value) {
  return <Pictogram {...value} />;
}

<div style={{ height: "200px" }}>
  <button
    style={{ position: "absolute", zIndex: 1 }}
    type="button"
    onClick={() => {
      const value = {
        label: "with everyone",
        src:
          "https://s3.amazonaws.com/opensymbols/libraries/arasaac/group of people.png"
      };

      output.push(value);
    }}
  >
    Add
  </button>
  <Output
    onBackspaceClick={output.pop}
    onClearClick={output.clear}
    renderValue={renderValue}
    values={output.values}
  />
</div>;
```

Output RTL:

```jsx
import { Pictogram, useOutput } from "@shayc/react-obf";

const values = [
  {
    label: "speak",
    src: "https://s3.amazonaws.com/opensymbols/libraries/arasaac/talk.png"
  },
  {
    label: "with everyone",
    src:
      "https://s3.amazonaws.com/opensymbols/libraries/arasaac/group of people.png"
  }
];

const output = useOutput(values);

function renderValue(value) {
  return <Pictogram {...value} />;
}

<div style={{ height: "200px" }}>
  <button
    style={{ position: "absolute", zIndex: 1 }}
    type="button"
    onClick={() => {
      const value = {
        label: "with everyone",
        src:
          "https://s3.amazonaws.com/opensymbols/libraries/arasaac/group of people.png"
      };

      output.push(value);
    }}
  >
    Add
  </button>
  <Output
    dir="rtl"
    onBackspaceClick={output.pop}
    onClearClick={output.clear}
    renderValue={renderValue}
    values={output.values}
  />
</div>;
```
