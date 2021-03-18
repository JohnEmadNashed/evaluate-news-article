// TODO: import the url check function
// Done
import checkUrl from "../js/checkURL";

describe("Test check url functionality", () => {
  test("Testing the checkUrl function defined or not", () => {
    // TODO: write your logic here
    // Done
    expect(checkUrl).toBeDefined();
  });

  test("Testing the checkUrl function return false for invalid url", () => {
    // TODO: write your logic here
    // Done
    expect(checkUrl("invalid url")).toBeFalsy();
  });

  test("Testing the checkUrl function return true for valid url", () => {
    // TODO: write your logic here
    // Done
    expect(checkUrl("https://www.npmjs.com/package/valid-url")).toBeTruthy();
  });
});
