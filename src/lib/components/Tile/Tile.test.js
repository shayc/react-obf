import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Tile from "./Tile";

describe("<Tile />", () => {
  test("render with content", () => {
    const content = "Content";
    const { container } = render(<Tile>{content}</Tile>);

    expect(container.textContent).toBe(content);
  });

  test("render with background color", () => {
    const backgroundColor = "red";
    const { container } = render(<Tile backgroundColor={backgroundColor} />);
    const tile = container.firstChild;

    expect(tile.style.backgroundColor).toBe(backgroundColor);
  });

  test("render with border color", () => {
    const borderColor = "red";
    const { container } = render(<Tile borderColor={borderColor} />);
    const tile = container.firstChild;

    expect(tile.style.borderColor).toBe(borderColor);
  });

  test("render a button element by default", () => {
    const { container } = render(<Tile />);
    const tile = container.firstChild;

    expect(tile.nodeName).toBe("BUTTON");
    expect(tile.type).toBe("button");
  });

  test("render a div element", () => {
    const { container } = render(<Tile component="div" />);
    const tile = container.firstChild;

    expect(tile.nodeName).toBe("DIV");
    expect(tile.type).toBe(undefined);
  });

  test("render with folder class name", () => {
    const folderClassName = "rootFolder";
    const { container } = render(<Tile variant="folder" />);
    const tile = container.firstChild;

    expect(tile).toHaveClass(folderClassName);
  });

  test("pass className prop", () => {
    const className = "testClassName";
    const { container } = render(<Tile className={className} />);
    const tile = container.firstChild;

    expect(tile).toHaveClass(className);
  });

  test("binds onClick event handler", () => {
    const handleClick = jest.fn();
    const { container } = render(<Tile onClick={handleClick} />);
    const tile = container.firstChild;

    fireEvent.click(tile);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
