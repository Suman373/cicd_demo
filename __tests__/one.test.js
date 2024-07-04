function sum(a, b) { return a + b; }

test('func to add a+b', () => {
    expect(sum(2,4)).toBe(6);
});