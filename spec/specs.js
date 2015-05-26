describe("encrypt", function() {
  it("removes all the spaces from the sentence", function() {
    expect(normalizeMessage("hello world")).to.equal("helloworld");
  });
  it("removes all punctuation from the sentence", function() {
    expect(normalizeMessage("hello world,.!")).to.equal("helloworld");
  });
  it("lower cases all uppcased letters from the sentence.", function() {
    expect(normalizeMessage("HELLO WORLD")).to.equal("helloworld");
  });
  it("gets the square root of the sentence", function() {
    expect(sqrtMessage("iamu")).to.equal(2);
  });
});
