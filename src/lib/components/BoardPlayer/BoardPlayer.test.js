import React from "react";
import { render } from "@testing-library/react";

import BoardPlayer from "./BoardPlayer";

describe("<BoardPlayer />", () => {
  const output = {
    pop: jest.fn(),
    push: jest.fn(),
    clear: jest.fn(),
    values: []
  };

  const nav = {
    backDisabled: false,
    forwardDisabled: false,
    goBack: jest.fn(),
    goForward: jest.fn()
  };

  const grid = {
    columns: 3,
    rows: 3
  };

  test("should render", () => {
    const { container } = render(
      <BoardPlayer output={output} nav={nav} grid={grid} />
    );

    expect(container).toBeInTheDocument();
  });
});
