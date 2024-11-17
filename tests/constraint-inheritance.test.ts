import { Employee } from "../src/test";

describe("Should be able to inheritance", () => {
  class EmployeeData<T extends Employee> {
    constructor(public employee: T) {}
  }

  it("should support constraint", () => {
    const data1 = new EmployeeData<Employee>({
      id: 123,
      name: "farhan",
    });
    expect(data1.employee.id).toBe(123);
    expect(data1.employee.name).toBe("farhan");
  });

  it("should support arrat", async () => {
    const array = new Array<string>();
    array.push("farhan");
    array.push("ramadan");
    expect(array[0]).toBe("farhan");
    expect(array[1]).toBe("ramadan");
  });

  it("should support set", () => {
    const data = new Set<string>();
    data.add("farhan");
    data.add("ramadan");
    data.add("farhan");

    expect(data.size).toBe(2);
    expect(data.has("farhan")).toBe(true);
    expect(data.has("ramadan")).toBe(true);
  });
});
