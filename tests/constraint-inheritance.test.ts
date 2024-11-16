import { Employee } from "../src/test";

describe("Should be able to inheritance", () => {
  class EmployeeData<T extends Employee> {
    constructor(public employee: T) {}
  }
});
