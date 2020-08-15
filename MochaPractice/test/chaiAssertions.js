const chai = require('chai');

//expect - BDD

const expect = chai.expect;

// expect API examples

// should() - BDD

const should = chai.should();

// assert - TDD, no chaining allowed

const assert = chai.assert;

let a=1, b=1;
expect(a).to.be.equals(b, "a and b are not equal");
//should--
a.should.be.equals(b);

// object/string/boolean

function myObj(){
    return{
        a: 100,
        b: 'Hello'
    };
};

x = new myObj(), y = new myObj();
expect(x).to.be.an('Object');
//expect(x).to.be.equals(y, 'x and y are not equal');

// the above is similar to JS's ===
// while deep.equal or deep.equals are similar to ==

expect(x).to.be.deep.equals(y, 'x and y are not equal');
x.should.be.deep.equals(y, 'x and y are not equal');
assert.deepEqual(x,y, 'x and y are not equal');

// chaining expressions
// x is an object; x and y are equal
// keywords are: and, with, but,...

expect(x).to.be.an('Object').and.to.be.deep.equals(y);
x.should.be.an('Object').and.to.be.deep.equals(y);

//arrays
let numbers = [1,2,3,0]
expect(numbers).to.be.an('array').that.includes(0);
numbers.should.be.an('array').that.includes(3);
assert.isArray(numbers, 'number is not an array');

