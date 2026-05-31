import { render, screen, fireEvent } from "@testing-library/react";

import Counter from "./Counter";

test("Should increment counter on button click", () => {
  render(<Counter />);

    const countElement = screen.getByTestId("count");
    const buttonElement = screen.getByText("Click me");

    expect(countElement).toHaveTextContent("0");

    fireEvent.click(buttonElement);

    expect(countElement).toHaveTextContent("1");
});

test("Matches snapshot", () => {
    const { asFragment } = render(<Counter />);

    expect(asFragment()).toMatchSnapshot();
});
