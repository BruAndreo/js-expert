const { describe, it, before } = require('mocha');
const { expect } = require('chai');

describe('todo', () => {
    describe('#isValid', () => {
        it('should return invalid when creating object without text');
        it('should return invalid when creating object using the "when" property invalid');
        it('should have "id", "text", "when" and "status" properties after creating object');
    });
});