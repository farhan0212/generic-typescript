describe("should work", () => {
  class simpleGeneric<T = number> {
    private value?: T;

    setValue(value: T) {
      this.value = value;
    }

    getValue(): T | undefined {
      return this.value;
    }
  }

  it("should be work default", () => {
    const value = new simpleGeneric<string>();
    value.setValue("Farhan");
    expect(value.getValue()!.toUpperCase()).toBe("FARHAN");
  });
});
