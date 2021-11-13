'use strict';


function Stack() {
  this.length = 0;
}

Stack.prototype.push = function(value) {
  this[this.length++] = value;
  return this;
}

Stack.prototype.pop = function() {

  if (this.length === 0) return null;
  let result = this[--this.length];
  delete this[this.length];
  return result;
}

Stack.prototype.peek = function() {
  // if(this.length === 0) return 'sorry - empty stack';
  if(this.length === 0) return null;
  let lastIndexNumber = this.length
  let result = this[lastIndexNumber - 1];
  // return `This is the last element at index number ${lastIndexNumber - 1}: ${result}`;
  return result;
}

Stack.prototype.isEmpty = function() {
  if(this.length === 0) return true;
  return false;
}

module.exports = Stack;