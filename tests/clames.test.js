const clames = require("../src");

test("keeps object keys with truthy values", () => {
  expect(clames({ a: true, b: false, c: 0, d: null, e: undefined, f: 1 })).toBe(
    "a f"
  );
});
