describe("encrypt", function() {
  it("removes all the spaces from the sentence", function() {
    expect(encrypt("hello world")).to.equal("helloworld");
  });
  it("removes all punctuation from the sentence", function() {
    expect(encrypt("hello world,.!")).to.equal("helloworld");
  });
  it("lower cases all uppcased letters from the sentence.", function() {
    expect(encrypt("HELLO WORLD")).to.equal("helloworld");
  });
});
