const sum = require("./jsMatchers");
// //test("description", testFunction);

// test("Adding 1 + 2 equal to 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

// different Matchers
test("adding 2+2 is equal to be 4", () => {
  expect(2 + 2).toBe(4); //used for primitive datatypes(number, boolean, string)
});

test("object assignment", () => {
  var data = { one: 1 };
  data["two"] = 2;

  expect(data).toEqual({ one: 1, two: 2 }); // toEqual is used for non-primitive datatypes, here its object
});

test("null is falsy", () => {
  const n = null;
  expect(n).toBeFalsy();
});

test("zero is falsy", () => {
  const n = 0;
  expect(n).toBeFalsy();
});

test("one is truthy", () => {
  const n = 1;
  expect(n).toBeTruthy();
});

test("throw matcher", () => {
  expect(() => {
    sum.invalidFunction("stringInput");
  }).toThrow();
});
