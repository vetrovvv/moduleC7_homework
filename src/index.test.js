const multiply = require('./index.js');

test('adds 2 * 2 to equal 4', () => {
    expect(multiply(2, 2)).toBe(4);
});

import { revertString } from "../../utils/revertString.js";

describe("tests for revertString function", () => {
  it("should reverse string", () => expect(revertString("abc")).toBe("cba"));
});
