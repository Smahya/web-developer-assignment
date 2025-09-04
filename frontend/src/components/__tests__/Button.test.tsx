import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "../Button";

// Mocked Loader component
jest.mock("../Loader/Loader", () => ({
  Loader: ({
    width,
    height,
  }: {
    width: number;
    height: number;
    bgColor?: string;
  }) => (
    <div data-testid="loader" data-width={width} data-height={height}>
      Loading...
    </div>
  ),
}));

describe("Button Component", () => {
  describe("Rendering", () => {
    it("renders button with children", () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole("button")).toHaveTextContent("Click me");
    });

    it("applies default props correctly", () => {
      render(<Button>Default Button</Button>);

      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("type", "button");
      expect(button).toHaveClass("bg-gray-700", "text-white"); // primary variant
    });
  });

  describe("Variants", () => {
    it("applies link variant styles", () => {
      render(<Button variant="link">Link</Button>);

      const button = screen.getByRole("button");
      expect(button).toHaveClass("text-gray-700");
    });

    it("applies danger variant styles", () => {
      render(<Button variant="danger">Delete</Button>);

      const button = screen.getByRole("button");
      expect(button).toHaveClass("bg-red-500", "text-white", "px-4", "py-2");
    });
  });

  describe("Props and Attributes", () => {
    it("applies custom className", () => {
      render(<Button className="custom-class">Button</Button>);

      const button = screen.getByRole("button");
      expect(button).toHaveClass("custom-class");
    });

    it("sets button type correctly", () => {
      render(<Button type="submit">Submit</Button>);

      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("type", "submit");
    });

    it("forwards additional props to button element", () => {
      render(
        <Button data-testid="custom-button" aria-label="Custom button">
          Button
        </Button>
      );

      const button = screen.getByTestId("custom-button");
      expect(button).toHaveAttribute("aria-label", "Custom button");
    });
  });

  describe("Disabled State", () => {
    it("applies disabled styles when disabled", () => {
      render(<Button disabled>Disabled</Button>);

      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
      expect(button).toHaveClass(
        "disabled:opacity-50",
        "disabled:cursor-not-allowed"
      );
    });

    it("does not trigger onClick when disabled", () => {
      const handleClick = jest.fn();
      render(
        <Button disabled onClick={handleClick}>
          Disabled
        </Button>
      );

      const button = screen.getByRole("button");
      fireEvent.click(button);

      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe("Loading State", () => {
    it("shows loader when loading is true", () => {
      render(<Button loading>Loading Button</Button>);

      expect(screen.getByTestId("loader")).toBeInTheDocument();
      expect(screen.getByText("Loading Button")).toBeInTheDocument();
    });

    it("does not show loader when loading is false", () => {
      render(<Button loading={false}>Not Loading</Button>);

      expect(screen.queryByTestId("loader")).not.toBeInTheDocument();
    });
  });

  describe("Interaction", () => {
    it("calls onClick handler when clicked", () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Clickable</Button>);

      const button = screen.getByRole("button");
      fireEvent.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("Accessibility", () => {
    it("maintains proper button role", () => {
      render(<Button>Accessible Button</Button>);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });

    it("supports aria attributes", () => {
      render(
        <Button aria-pressed="true" aria-describedby="help-text">
          Toggle
        </Button>
      );

      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("aria-pressed", "true");
      expect(button).toHaveAttribute("aria-describedby", "help-text");
    });
  });
});
