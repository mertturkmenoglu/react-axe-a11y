import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import axe from "axe-core";

test("renders learn react link", async () => {
  render(<App />);

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("check a11y", async () => {
  const component = render(<App />);
  const results = await axe.run(component.baseElement);
  expect(results.violations).toHaveLength(0);
});
