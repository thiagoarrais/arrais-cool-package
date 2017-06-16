var expect  = require('chai').expect;
var isNullOrEmpty = require('../index');

it("should do it's thing", function() {
    expect(isNullOrEmpty(null)).to.equal(true);
    expect(isNullOrEmpty("")).to.equal(true);
    expect(isNullOrEmpty("abc")).to.equal(false);
});