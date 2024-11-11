describe("Generic function", () => {
  function Name<T>(value: T) {
    return value;
  }

  it("should support function generic", () => {
    const result: string = Name<string>("farhan");
    expect(result).toBe("farhan");
    const result2: number = Name<number>(123);
    expect(result2).toBe(123);
  });
});
