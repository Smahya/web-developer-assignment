import { generateDottedPages, RADIUS } from "../generate-dotted-pages";

describe("generateDottedPages Utility", () => {
  describe("Basic Functionality", () => {
    it("generates correct pages for small total with no dots needed", () => {
      const result = generateDottedPages(50, 10, 3); // 5 total pages, current page 3
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it("generates pages with dots when total pages exceed radius", () => {
      const result = generateDottedPages(200, 10, 10); // 20 total pages, current page 10
      expect(result).toEqual([1, "...", 8, 9, 10, 11, 12, "...", 20]);
    });

    it("includes first and last page always", () => {
      const result = generateDottedPages(300, 10, 15); // 30 total pages, current page 15
      expect(result[0]).toBe(1);
      expect(result[result.length - 1]).toBe(30);
    });
  });

  describe("Edge Cases", () => {
    it("handles single page", () => {
      const result = generateDottedPages(5, 10, 1); // Less than pageSize = 1 total page
      expect(result).toEqual([1]);
    });

    it("handles exact page size", () => {
      const result = generateDottedPages(10, 10, 1); // Exactly one page
      expect(result).toEqual([1]);
    });

    it("handles current page at the beginning", () => {
      const result = generateDottedPages(200, 10, 1); // 20 total pages, first page
      expect(result).toEqual([1, 2, 3, "...", 20]);
    });

    it("handles current page at the end", () => {
      const result = generateDottedPages(200, 10, 20); // 20 total pages, last page
      expect(result).toEqual([1, "...", 18, 19, 20]);
    });
  });

  describe("Radius Behavior", () => {
    it("respects RADIUS constant for page range around current page", () => {
      const result = generateDottedPages(200, 10, 10); // 20 total pages, page 10

      // Should include pages within RADIUS of current page
      expect(result).toContain(10 - RADIUS); // page 8
      expect(result).toContain(10 - 1); // page 9
      expect(result).toContain(10); // current page
      expect(result).toContain(10 + 1); // page 11
      expect(result).toContain(10 + RADIUS); // page 12
    });
  });

  describe("Performance and Efficiency", () => {
    it("handles large datasets efficiently", () => {
      const start = performance.now();
      generateDottedPages(100000, 100, 500); // 1000 total pages
      const end = performance.now();

      // Should complete in reasonable time (less than 10ms)
      expect(end - start).toBeLessThan(10);
    });

    it("returns reasonable array length for large datasets", () => {
      const result = generateDottedPages(100000, 100, 500);
      // Should not return thousands of pages, should use dots effectively
      expect(result.length).toBeLessThan(20);
    });
  });
});
