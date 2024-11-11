import { Multiple, MultipleClass } from "./../src/multiple-generic";
describe("Multiple Generic Function", () => {
  it("should ", () => {
    const value = new Multiple<string, number>("farhan", 24);
    expect(value.key).toBe("farhan");
    expect(value.value).toBe(24);
  });

  it("should be able to triple generic", () => {
    const value = new MultipleClass<string, number, boolean>(
      "Farhan",
      24,
      true
    );
    expect(value.first).toBe("Farhan");
    expect(value.second).toBe(24);
    expect(value.third).toBe(true);
  });
});
