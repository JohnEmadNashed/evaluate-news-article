// to solve ReferenceError: regeneratorRuntime is not defined
// https://knowledge.udacity.com/questions/174638
import "babel-polyfill";

import handleSubmit from "../js/formHandler";

describe('Test, the function "handleSubmit()" should exist', () => {
  test("It should return true", () => {
    expect(handleSubmit).toBeDefined();
  });
});
