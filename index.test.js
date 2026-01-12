import * as index from "./index.js"

test('first letter capitalized', () => expect(index.capitalize("abracadabra")).toBe("Abracadabra"));

test('reversed string', () => expect(index.reverseString("abcdef")).toBe("fedcba"));

test('calculator functions', () => {
    expect(index.add(1, 1)).toBe(2);
    expect(index.subtract(4, 2)).toBe(2);
    expect(index.divide(16, 2)).toBe(8);
    expect(index.multiply(12, 12)).toBe(144);
})