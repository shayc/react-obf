import React from "react";
import { render } from "@testing-library/react";

import AbsolutePosition from "./AbsolutePosition";

describe("<AbsolutePosition />", () => {
  test("should render item with style", () => {
    const item = { id: "1", top: 0.1, left: 0.01, width: 0.5, height: 0.25 };
    const items = [item];
    const renderItem = jest.fn();
    const { getByTestId } = render(
      <AbsolutePosition items={items} renderItem={renderItem} />
    );
    const itemContainerStyle = getByTestId("item-container").style;

    expect(itemContainerStyle.position).toBe("absolute");
    expect(itemContainerStyle.top).toBe("10%");
    expect(itemContainerStyle.left).toBe("1%");
    expect(itemContainerStyle.width).toBe("50%");
    expect(itemContainerStyle.height).toBe("25%");
  });

  test("call renderItem function with item", () => {
    const item = { top: 0.1, left: 0.01, width: 0.5, height: 0.25 };
    const items = [
      { id: "1", ...item },
      { id: "2", ...item }
    ];
    const renderItem = jest.fn();
    render(<AbsolutePosition items={items} renderItem={renderItem} />);

    expect(renderItem).toHaveBeenCalledTimes(2);
    expect(renderItem).toHaveBeenCalledWith(items[0]);
    expect(renderItem).toHaveBeenCalledWith(items[1]);
  });

  test("pass className prop", () => {
    const items = [];
    const renderItem = jest.fn();
    const className = "testClassName";
    const { container } = render(
      <AbsolutePosition
        items={items}
        renderItem={renderItem}
        className={className}
      />
    );

    expect(container.firstChild).toHaveClass(className);
  });
});
