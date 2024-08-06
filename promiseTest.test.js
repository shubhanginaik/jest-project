const fetchPromise = require("./promisetest");

test("the data is peanut butter", () => {
  return expect(fetchPromise()).resolves.toBe("peanut butter");
});

test("the data is peanut butter", async () => {
  const data = await fetchPromise();
  expect(data).toBe("peanut butter");
});
