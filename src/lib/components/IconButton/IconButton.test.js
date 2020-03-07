import React from "react";
import { render } from "@testing-library/react";

import IconButton from "./IconButton";

describe("<IconButton />", () => {
  test("render with children", () => {
    const label = "Hello world";
    const content = "Welcome";
    const { queryByLabelText } = render(
      <IconButton label={label}>{content}</IconButton>
    );

    expect(queryByLabelText(label)).toHaveTextContent(content);
  });

  test("render disabled", () => {
    const label = "Hello world";
    const { queryByLabelText } = render(
      <IconButton label={label} disabled={true} />
    );

    expect(queryByLabelText(label)).toBeDisabled();
  });

  test("render with label", () => {
    const label = "Hello world";
    const { queryByLabelText } = render(<IconButton label={label} />);

    expect(queryByLabelText(label)).toBeInTheDocument();
  });

  test("render with title (defaults to label)", () => {
    const label = "Hello world";
    const { queryByTitle } = render(<IconButton label={label} />);

    expect(queryByTitle(label)).toBeInTheDocument();
  });

  test("render without title when disabled", () => {
    const label = "Hello world";
    const { container } = render(<IconButton label={label} disabled={true} />);

    expect(container.firstChild.title).toBe("");
  });

  test("pass title prop", () => {
    const label = "Hello world";
    const title = "Title";
    const { queryByTitle } = render(<IconButton label={label} title={title} />);

    expect(queryByTitle(title)).toBeInTheDocument();
  });

  test("pass className prop", () => {
    const label = "Hello world";
    const className = "testClassName";
    const { queryByLabelText } = render(
      <IconButton label={label} className={className} />
    );

    expect(queryByLabelText(label)).toHaveClass(className);
  });
});
