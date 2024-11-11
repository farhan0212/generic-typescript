import { GenericData } from "./../src/generic";

describe("generic data", () => {
  it("should work", () => {
    const data = new GenericData<number>(123);
    expect(data.value).toBe(123);
  });

  it("should work", () => {
    const data = new GenericData<string>("farhan ramadan");
    expect(data.value).toBe("farhan ramadan");
  });
});
