const getRandomInt = require('../Exerc01')

describe('Exerc01', () => {
    min = 30
    max = 20

    test('should be return a number (-1)', () => {
        const res = getRandomInt(min, max)
        expect(res).toBe(-1);
    })
})