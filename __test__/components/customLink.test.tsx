import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CustomLink from "@/components/CustomLink";
import { ReactNode } from "react";

// Mock the Next.js link
jest.mock("next/link", () => {
  return ({ children }: { children: ReactNode }) => {
    return children;
  };
});

describe("Custom Link", () => {
  const testUrl = "/login";

  // Positive test case
  it("should navigate to the correct URL when the link is clicked (positive scenario)", () => {
    render(<CustomLink href={testUrl} text="Go to Login" data="login-link" />);

    const linkElement = screen.getByText("Go to Login");
    fireEvent.click(linkElement);

    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest("a")).toHaveAttribute("href", testUrl);
  });

  // Negative test case
  it("should not navigate if the link is broken (negative scenario)", () => {
    // Pass an undefined URL as a broken link scenario
    render(<CustomLink href={undefined} text="Broken Link" />);

    const linkElement = screen.getByText("Broken Link");
    fireEvent.click(linkElement);

    expect(linkElement.closest("a")).not.toHaveAttribute("href", testUrl);
  });
});
