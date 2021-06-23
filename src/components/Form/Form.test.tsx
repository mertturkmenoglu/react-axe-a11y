import React from "react";
import { render } from "@testing-library/react";
import Form, { FormProps } from "./index";
import axe from "axe-core";

describe("Form Component Tests", () => {
  let props: FormProps;

  beforeEach(() => {
    props = {
      label: "My Form Text",
    };
  });

  it("Renders Form", () => {
    const component = render(<Form label={props.label} />);
    const formElement = component.container.querySelector("form");

    expect(formElement).toBeInTheDocument();
  });

  it("Checks a11y", async () => {
    const component = render(<Form label={props.label} />);
    const results = await axe.run(component.container);
    expect(results.violations).toHaveLength(0);
  });
});
