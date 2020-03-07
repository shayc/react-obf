import React from "react";
import { render, fireEvent } from "@testing-library/react";

import NavBar from "./NavBar";

describe("<NavBar />", () => {
  test("render with navigation title", () => {
    const handleBackClick = jest.fn();
    const handleForwardClick = jest.fn();
    const title = "Home page";
    const { queryByText } = render(
      <NavBar
        onBackClick={handleBackClick}
        onForwardClick={handleForwardClick}
        title={title}
      />
    );

    expect(queryByText(title)).toBeInTheDocument();
  });

  test("render with back button", () => {
    const handleBackClick = jest.fn();
    const handleForwardClick = jest.fn();
    const { queryByLabelText } = render(
      <NavBar
        onBackClick={handleBackClick}
        onForwardClick={handleForwardClick}
      />
    );

    expect(queryByLabelText("Back")).toBeInTheDocument();
  });

  test("render with forward button", () => {
    const handleBackClick = jest.fn();
    const handleForwardClick = jest.fn();
    const { queryByLabelText } = render(
      <NavBar
        onBackClick={handleBackClick}
        onForwardClick={handleForwardClick}
      />
    );

    expect(queryByLabelText("Forward")).toBeInTheDocument();
  });

  test("bind onBackClick event handler", () => {
    const handleBackClick = jest.fn();
    const handleForwardClick = jest.fn();
    const { queryByLabelText } = render(
      <NavBar
        onBackClick={handleBackClick}
        onForwardClick={handleForwardClick}
      />
    );

    fireEvent.click(queryByLabelText("Back"));

    expect(handleBackClick).toHaveBeenCalledTimes(1);
  });

  test("bind onForwardClick event handler", () => {
    const handleBackClick = jest.fn();
    const handleForwardClick = jest.fn();
    const { queryByLabelText } = render(
      <NavBar
        onBackClick={handleBackClick}
        onForwardClick={handleForwardClick}
      />
    );

    fireEvent.click(queryByLabelText("Forward"));

    expect(handleForwardClick).toHaveBeenCalledTimes(1);
  });

  test("render disabled back button", () => {
    const handleBackClick = jest.fn();
    const handleForwardClick = jest.fn();
    const { queryByLabelText } = render(
      <NavBar
        backDisabled={true}
        onBackClick={handleBackClick}
        onForwardClick={handleForwardClick}
      />
    );

    const backButton = queryByLabelText("Back");

    expect(backButton).toBeDisabled();
  });

  test("render disabled forward button", () => {
    const handleBackClick = jest.fn();
    const handleForwardClick = jest.fn();
    const { queryByLabelText } = render(
      <NavBar
        forwardDisabled={true}
        onBackClick={handleBackClick}
        onForwardClick={handleForwardClick}
      />
    );

    const forwardButton = queryByLabelText("Forward");

    expect(forwardButton).toBeDisabled();
  });
});
