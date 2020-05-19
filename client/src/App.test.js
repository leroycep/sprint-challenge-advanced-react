import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  render(<App />);
});

it("has dark mode toggle", async () => {
  const { getByLabelText } = render(<App />);

  const darkModeClassName = "dark-mode";
  const body = document.body;
  const darkModeCheckbox = getByLabelText(/dark mode/i);
  const initialMode = darkModeCheckbox.checked;

  if (initialMode) {
    expect(body.classList).toContain(darkModeClassName);
  } else {
    expect(body.classList).not.toContain(darkModeClassName);
  }

  fireEvent.click(darkModeCheckbox);

  if (darkModeCheckbox.checked) {
    expect(body.classList).toContain(darkModeClassName);
  } else {
    expect(body.classList).not.toContain(darkModeClassName);
  }

  expect(darkModeCheckbox.checked).not.toEqual(initialMode);
});
