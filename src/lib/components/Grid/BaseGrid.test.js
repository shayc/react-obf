import React from "react";
import { render } from "@testing-library/react";

import BaseGrid from "./BaseGrid";

describe("<BaseGrid />", () => {
  test("smoke", () => {
    const renderItem = () => {};
    const items = [];
    const columns = 3;
    const rows = 3;

    const { container } = render(
      <BaseGrid
        items={items}
        renderItem={renderItem}
        columns={columns}
        rows={rows}
      />
    );

    expect(container).toBeInTheDocument();
  });

  test("render items", () => {
    const renderItem = jest.fn(item => item.label);
    const item = { id: "1", label: "Hi" };
    const items = [item];
    const columns = 3;
    const rows = 3;

    const { queryByText } = render(
      <BaseGrid
        items={items}
        renderItem={renderItem}
        columns={columns}
        rows={rows}
      />
    );

    expect(renderItem).toHaveBeenCalledTimes(1);
    expect(queryByText(item.label)).toBeInTheDocument();
  });
});
