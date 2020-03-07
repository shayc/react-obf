Grid examples:

###### Grid

```jsx
import { Grid } from "@shayc/react-obf";

<div style={{ height: "320px" }}>
  <Grid
    columns={3}
    rows={3}
    items={[
      { id: "1", label: "Item 1" },
      { id: "2", label: "Item 2" },
      { id: "3", label: "Item 3" },
      { id: "4", label: "Item 4" },
      { id: "5", label: "Item 5" },
      { id: "6", label: "Item 6" },
      { id: "7", label: "Item 7" },
      { id: "8", label: "Item 8" },
      { id: "9", label: "Item 9" },
      { id: "10", label: "Item 10" },
      { id: "11", label: "Item 11" },
      { id: "12", label: "Item 12" }
    ]}
    order={[
      [null, null, null],
      [null, null, null],
      [null, "2", "1"]
    ]}
    renderItem={item => <button type="button">{item.label}</button>}
  />
</div>;
```

###### Grid RTL

```jsx
import { Grid } from "@shayc/react-obf";

<div style={{ height: "320px" }}>
  <Grid
    dir="rtl"
    columns={3}
    rows={3}
    items={[
      { id: "1", label: "Item 1" },
      { id: "2", label: "Item 2" },
      { id: "3", label: "Item 3" },
      { id: "4", label: "Item 4" },
      { id: "5", label: "Item 5" },
      { id: "6", label: "Item 6" }
    ]}
    renderItem={item => <button type="button">{item.label}</button>}
  />
</div>;
```
