import React from "react";
import { render } from "@testing-library/react";

import Scroll from "./Scroll";

describe("<Scroll />", () => {
  test("render with children", () => {
    const content = "hello world";
    const { container } = render(<Scroll>{content}</Scroll>);

    expect(container.firstChild.textContent).toBe("hello world");
  });
});
