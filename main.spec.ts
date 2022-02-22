import { add } from "./main";

describe("add function should work perperly", () => {
  it("should add two numbers", () => {
    expect(add(1, 1)).toEqual(2);
    expect(add(2, 5)).toEqual(7);
  });
})