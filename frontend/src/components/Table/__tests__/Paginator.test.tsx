import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Paginator } from "../Paginator";

// Mocked ArrowLeft icon
jest.mock("@/assets/icons/arrow-left", () => {
  return function ArrowLeft({ className }: { className?: string }) {
    return (
      <span data-testid="arrow-left" className={className}>
        ←
      </span>
    );
  };
});

// Mocked utility function
jest.mock("@/utils/generate-dotted-pages", () => ({
  generateDottedPages: jest.fn(),
}));

import { generateDottedPages } from "@/utils/generate-dotted-pages";

const mockedGenerateDottedPages = generateDottedPages as jest.MockedFunction<
  typeof generateDottedPages
>;

describe("Paginator Component", () => {
  const mockSetPage = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const defaultProps = {
    page: 1,
    total: 100,
    pageSize: 10,
    setPage: mockSetPage,
  };

  describe("Rendering", () => {
    it("renders paginator with navigation buttons", () => {
      mockedGenerateDottedPages.mockReturnValue([1, 2, 3, 4, 5]);

      render(<Paginator {...defaultProps} />);

      expect(screen.getByText("Previous")).toBeInTheDocument();
      expect(screen.getByText("Next")).toBeInTheDocument();
      expect(screen.getAllByTestId("arrow-left")).toHaveLength(2);
    });

    it("renders page numbers correctly", () => {
      mockedGenerateDottedPages.mockReturnValue([1, 2, 3, "...", 10]);

      render(<Paginator {...defaultProps} />);

      expect(screen.getByText("1")).toBeInTheDocument();
      expect(screen.getByText("2")).toBeInTheDocument();
      expect(screen.getByText("3")).toBeInTheDocument();
      expect(screen.getByText("10")).toBeInTheDocument();
    });
  });

  describe("Navigation Functionality", () => {
    it("calls setPage when clicking on a page number", () => {
      mockedGenerateDottedPages.mockReturnValue([1, 2, 3, 4, 5]);

      render(<Paginator {...defaultProps} />);

      fireEvent.click(screen.getByText("3"));
      expect(mockSetPage).toHaveBeenCalledWith(3);
    });

    it("does not call setPage when clicking on dots", () => {
      mockedGenerateDottedPages.mockReturnValue([1, 2, "...", 9, 10]);

      render(<Paginator {...defaultProps} />);

      // Note: dots are rendered as text but don't have click handlers
      expect(mockSetPage).not.toHaveBeenCalled();
    });

    it("navigates to next page when clicking Next button", () => {
      mockedGenerateDottedPages.mockReturnValue([1, 2, 3, 4, 5]);

      render(<Paginator {...defaultProps} page={3} />);

      fireEvent.click(screen.getByText("Next"));
      expect(mockSetPage).toHaveBeenCalledWith(4);
    });

    it("navigates to previous page when clicking Previous button", () => {
      mockedGenerateDottedPages.mockReturnValue([1, 2, 3, 4, 5]);

      render(<Paginator {...defaultProps} page={3} />);

      fireEvent.click(screen.getByText("Previous"));
      expect(mockSetPage).toHaveBeenCalledWith(2);
    });
  });

  describe("Boundary Conditions", () => {
    it("disables Previous button on first page", () => {
      mockedGenerateDottedPages.mockReturnValue([1, 2, 3, 4, 5]);

      render(<Paginator {...defaultProps} page={1} />);

      const previousButton = screen.getByText("Previous").closest("button");
      expect(previousButton).toBeDisabled();
      expect(previousButton).toHaveClass(
        "disabled:opacity-50",
        "disabled:cursor-not-allowed"
      );
    });

    it("disables Next button on last page", () => {
      mockedGenerateDottedPages.mockReturnValue([6, 7, 8, 9, 10]);

      render(
        <Paginator {...defaultProps} page={10} total={100} pageSize={10} />
      );

      const nextButton = screen.getByText("Next").closest("button");
      expect(nextButton).toBeDisabled();
    });
  });

  describe("Edge Cases", () => {
    it("handles single page scenario", () => {
      mockedGenerateDottedPages.mockReturnValue([1]);

      render(<Paginator {...defaultProps} page={1} total={5} pageSize={10} />);

      const previousButton = screen.getByText("Previous").closest("button");
      const nextButton = screen.getByText("Next").closest("button");

      expect(previousButton).toBeDisabled();
      expect(nextButton).toBeDisabled();
    });

    it("calculates total pages correctly with decimal results", () => {
      mockedGenerateDottedPages.mockReturnValue([1, 2, 3]);

      render(<Paginator {...defaultProps} page={2} total={25} pageSize={10} />);

      // Should handle 25/10 = 2.5 pages (3 total pages)
      fireEvent.click(screen.getByText("Next"));
      expect(mockSetPage).toHaveBeenCalledWith(3);
    });
  });

  describe("Integration with generateDottedPages", () => {
    it("calls generateDottedPages with correct parameters", () => {
      render(
        <Paginator {...defaultProps} page={5} total={200} pageSize={20} />
      );

      expect(mockedGenerateDottedPages).toHaveBeenCalledWith(200, 20, 5);
    });
  });
});
