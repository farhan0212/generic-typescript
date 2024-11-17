describe("promise", () => {
  async function fetchData(value: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (value == "farhan") {
          resolve(`Hello ${value}`);
        } else {
          reject("not found");
        }
      }, 1000);
    });
  }

  it("should support promise", async () => {
    const result = await fetchData("farhan");
    expect(result.toUpperCase()).toBe("HELLO FARHAN");

    try {
      await fetchData("ahmad");
    } catch (error) {
      expect(error).toBe("not found");
    }
  });
});
