import { total } from "./App";
import { add } from "./add";

// Mocking
jest.mock("./add", () => ({
  // Fake fn
  add: jest.fn(() => 50)
}));

// Integration Test
// Test things working together
test("total", () => {
  expect(total(10, 40)).toBe("$50");
  expect(add).toHaveBeenCalledTimes(1);

  // redundant, example for mock implementation
  add.mockImplementation(() => 100);
  expect(total(20, 80)).toBe("$100");
  expect(add).toHaveBeenCalledTimes(2);
});
