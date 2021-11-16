
const AnimalShelter = require('../AnimalShelter');

describe('animal Queue', () => {
    let animal;
    beforeEach(() => {
        animal = new AnimalShelter();
    });

    describe('AnimalShelter test', () => {
        it('enqueue into a animal shelter + enqueue multiple values into a queue', () => {
            animal.enqueue('cat');
            animal.enqueue('dog');
            expect(animal.front.value).toEqual('cat');
        });

        it(' error when trying to enqueue anything rather than cat or dog', () => {
            expect(animal.enqueue(1)).toEqual('can only accept cat or dog');
        });
    });


    it('Add animals to the animal shelter then dequeue', () => {
        animal.enqueue('cat');
        animal.enqueue('dog');
        animal.enqueue('dog');
        expect(animal.dequeue()).toEqual('cat');
        expect(animal.dequeue()).toEqual('dog');
        expect(animal.dequeue()).toEqual('dog');
        expect(animal.dequeue()).toEqual("Animal Shelter is Empty");
    });

});