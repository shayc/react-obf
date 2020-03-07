import React from "react";
import { render } from "@testing-library/react";

import Pictogram from "./Pictogram";

describe("<Pictogram />", () => {
  test("render with label", () => {
    const label = "Hi";
    const { container } = render(<Pictogram label={label} />);

    expect(container.textContent).toBe(label);
  });

  test("render with label on top", () => {
    const label = "Hi";
    const labelPosition = "top";
    const { container } = render(
      <Pictogram label={label} labelPosition={labelPosition} />
    );

    // TODO: Need to test styles, snapshot maybe?

    expect(container.textContent).toBe(label);
  });

  test("render with image", () => {
    const label = "Hi";
    const src = "https://www.dummy.com/hi.jpg";
    const { container } = render(<Pictogram label={label} src={src} />);
    const img = container.querySelector("img");

    expect(img.src).toBe(src);
  });
});
