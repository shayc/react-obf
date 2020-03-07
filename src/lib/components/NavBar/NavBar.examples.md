NavBar examples:

###### NavBar

```jsx
import { NavBar, useNavigation } from "@shayc/react-obf";

const history = [{ title: "Root board" }, { title: "Inner board" }];
const index = 0;

const {
  backDisabled,
  currentHistory,
  forwardDisabled,
  goBack,
  goForward
} = useNavigation(history, index);

<NavBar
  backDisabled={backDisabled}
  forwardDisabled={forwardDisabled}
  onBackClick={goBack}
  onForwardClick={goForward}
  title={currentHistory.title}
/>;
```
