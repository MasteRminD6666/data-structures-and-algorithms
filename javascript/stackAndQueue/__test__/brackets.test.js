const validateBrackets = require('../brackets');
const Stack = require('../stack/Stack');

describe('brackets test', () => {
    beforeEach(() => {
        let stack = new Stack();
    });

    describe('Test Brackets Validation', () => {
        it('Test Brackets Validation and return true', () => {
            expect(validateBrackets('(){}[]')).toEqual(true);
        });
        it('Test Brackets Validation and return true wigth text ', () => {
            expect(validateBrackets('(r){a}[m]{[(noob)]}')).toEqual(true);
        });
        it('Test Brackets Validation return false', () => {
            expect(validateBrackets('{(})[]')).toEqual(false);
        });
        it('Test Brackets Validation and return false', () => {
            expect(validateBrackets('{})([]')).toEqual(false);
        });
    });
});