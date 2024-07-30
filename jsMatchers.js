function sum(a, b) {
  return a + b;
}

function invalidFunction(input) {
  if (typeof input !== "number") {
    throw new Error("Invalid Input");
  }
}
module.exports = { sum, invalidFunction };
