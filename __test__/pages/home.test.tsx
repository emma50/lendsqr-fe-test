import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home page", () => {
  // Positive test case
  it("should have element in the document (positive scenario)", () => {
    render(<Home />);
    const element = screen.getByTestId("welcome-statement");

    expect(element).toBeInTheDocument();
  });
});
