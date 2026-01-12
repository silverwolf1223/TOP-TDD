import * as index from "./index.js"

test('first letter capitalized', () => expect(index.capitalize("abracadabra")).toBe("Abracadabra"));

test('reversed string', () => expect(index.reverseString("abcdef")).toBe("fedcba"));

test('calculator functions', () => {
    expect(index.add(1, 1)).toBe(2);
    expect(index.subtract(4, 2)).toBe(2);
    expect(index.divide(16, 2)).toBe(8);
    expect(index.multiply(12, 12)).toBe(144);
})

test('caesarCipher function', () => {
    expect(index.caesarCipher('xyz', 3)).toBe('abc');
    expect(index.caesarCipher('heLLo', 3)).toBe('khOOr');
    expect(index.caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

test('analyze array', () => {
    expect(index.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({average: 4, min: 1, max: 8, length: 6});
})