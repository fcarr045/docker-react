import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/i was changed to feature/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/i was changed to feature/i);
  expect(linkElement).toBeInTheDocument();
});
