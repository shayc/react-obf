import React from "react";
import { render } from "@testing-library/react";

import Board from "./Board";

describe("<Board />", () => {
  const grid = {
    columns: 3,
    rows: 3
  };
  const renderButton = jest.fn();
  const buttons = [];

  test("should render", () => {
    const { container } = render(
      <Board buttons={buttons} renderButton={renderButton} grid={grid} />
    );

    expect(container).toBeInTheDocument();
  });
});
