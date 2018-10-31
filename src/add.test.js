import { add } from "./add";

// Unit Test
// It only test one thing
test("add", () => {
  // const value = add(1, 3);
  // expect(value).toBe(4);
  expect(add(3, 2)).toBe(5);
  expect(add(3, 7)).toBe(10);
});
