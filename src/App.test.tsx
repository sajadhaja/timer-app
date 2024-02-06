/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { act, render, screen } from "@testing-library/react";
import App from "./App";

test("renders start timer button", () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName("timer-container").length).toBe(1);

  const buttonElement = screen.getByText(/Start Timer/i);
  expect(buttonElement).toBeInTheDocument();

  act(() => {
    buttonElement.click();
  });

  expect(container.getElementsByClassName("count-text").length).toBe(1);
  expect(container.getElementsByClassName("circleOuter").length).toBe(1);
  expect(container.getElementsByClassName("circleInner").length).toBe(1);
});
