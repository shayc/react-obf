import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Output from "./Output";

describe("<Output />", () => {
  test("render with values", () => {
    const values = ["hello", "world"];
    const renderValue = jest.fn(value => value);
    const handleBackspaceClick = jest.fn();
    const handleClearClick = jest.fn();

    const { queryByText } = render(
      <Output
        values={values}
        renderValue={renderValue}
        onBackspaceClick={handleBackspaceClick}
        onClearClick={handleClearClick}
      />
    );

    expect(queryByText("hello")).toBeInTheDocument();
    expect(queryByText("world")).toBeInTheDocument();
  });

  test("render with backspace button", () => {
    const values = [];
    const renderValue = jest.fn(value => value);
    const handleBackspaceClick = jest.fn();
    const handleClearClick = jest.fn();
    const { queryByLabelText } = render(
      <Output
        values={values}
        renderValue={renderValue}
        onBackspaceClick={handleBackspaceClick}
        onClearClick={handleClearClick}
      />
    );

    expect(queryByLabelText("Backspace")).toBeInTheDocument();
  });

  test("render with clear button", () => {
    const values = [];
    const renderValue = jest.fn(value => value);
    const handleBackspaceClick = jest.fn();
    const handleClearClick = jest.fn();
    const { queryByLabelText } = render(
      <Output
        values={values}
        renderValue={renderValue}
        onBackspaceClick={handleBackspaceClick}
        onClearClick={handleClearClick}
      />
    );

    expect(queryByLabelText("Clear")).toBeInTheDocument();
  });

  test("render with disabled clear button when no values", () => {
    const values = [];
    const renderValue = jest.fn(value => value);
    const handleBackspaceClick = jest.fn();
    const handleClearClick = jest.fn();
    const { queryByLabelText } = render(
      <Output
        values={values}
        renderValue={renderValue}
        onBackspaceClick={handleBackspaceClick}
        onClearClick={handleClearClick}
      />
    );

    expect(queryByLabelText("Clear")).toBeDisabled();
  });

  test("binds onBackspaceClick event handler", () => {
    const values = [];
    const renderValue = jest.fn(value => value);
    const handleBackspaceClick = jest.fn();
    const handleClearClick = jest.fn();
    const { getByLabelText } = render(
      <Output
        values={values}
        renderValue={renderValue}
        onBackspaceClick={handleBackspaceClick}
        onClearClick={handleClearClick}
      />
    );

    const backspaceButton = getByLabelText("Backspace");
    fireEvent.click(backspaceButton);

    expect(handleBackspaceClick).toHaveBeenCalledTimes(1);
  });

  test("binds onClearClick event handler", () => {
    const values = ["hi"];
    const renderValue = jest.fn(value => value);
    const handleBackspaceClick = jest.fn();
    const handleClearClick = jest.fn();
    const { getByLabelText } = render(
      <Output
        values={values}
        renderValue={renderValue}
        onBackspaceClick={handleBackspaceClick}
        onClearClick={handleClearClick}
      />
    );

    const clearButton = getByLabelText("Clear");
    fireEvent.click(clearButton);

    expect(handleClearClick).toHaveBeenCalledTimes(1);
  });

  test("binds onClick event handler", () => {
    const values = ["hi"];
    const renderValue = jest.fn(value => value);
    const handleClick = jest.fn();
    const handleBackspaceClick = jest.fn();
    const handleClearClick = jest.fn();
    const { getByTestId } = render(
      <Output
        values={values}
        renderValue={renderValue}
        onClick={handleClick}
        onBackspaceClick={handleBackspaceClick}
        onClearClick={handleClearClick}
      />
    );

    const scrollContainer = getByTestId("scroll-container");
    fireEvent.click(scrollContainer);

    expect(scrollContainer).toHaveAttribute("role", "button");
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
