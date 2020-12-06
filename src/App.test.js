import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders example field", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Example/i);
  expect(linkElement).toBeInTheDocument();
});
