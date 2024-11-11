describe("No generic", () => {
  class name {
    value: any;
    constructor(value: any) {
      this.value = value;
    }
  }

  it("should ", () => {
    const data = new name("farhan");
    data.value = 100;
    console.info(data.value);
  });
});
