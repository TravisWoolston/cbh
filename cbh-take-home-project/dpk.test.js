const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  const event = {};
  const longString =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const shortString = "Lorem ipsum";
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Returns a string type", () => {
    const result = deterministicPartitionKey(longString);
    expect(typeof result).toBe("string");
  });
  it("Returns candidate when event length is less than 256", () => {
    const result = deterministicPartitionKey(shortString);
    expect(typeof result).toBe("string");
  });
  it("Returns matching result when given the same input", () => {
    const newString = deterministicPartitionKey(longString);
    event.partitionKey = newString;
    const result = deterministicPartitionKey(event);
    const resultCopy = deterministicPartitionKey(event);
    expect(result === resultCopy).toBe(true);
  });
});
