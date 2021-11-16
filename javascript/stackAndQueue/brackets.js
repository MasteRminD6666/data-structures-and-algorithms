"use strict";
const Node = require('./Node');
const Stack = require('./stack/Stack');
function validateBrackets(string) {

    let bracketTypes = "[]{}()";
    let stack = new Stack();
  
    for (let i = 0; i < string.length; i++) {
      let bracketIdx = bracketTypes.indexOf(string[i]);
      if (bracketIdx === -1) {
        continue;
      }
      if (bracketIdx % 2 === 0) {
        stack.push(bracketIdx + 1);
      } else if (stack.pop() !== bracketIdx) {
        return false;
      }
    }
    return stack.isEmpty();
  }
  
  module.exports = validateBrackets; 