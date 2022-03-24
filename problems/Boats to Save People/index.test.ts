import { numRescueBoats } from ".";

test("Example 1", () => {
    const people = [1, 2];
    const limit = 3;

    const numBoats = numRescueBoats(people, limit);
    expect(numBoats).toEqual(1);
});

test("Example 2", () => {
    const people = [3, 2, 2, 1];
    const limit = 3;

    const numBoats = numRescueBoats(people, limit);
    expect(numBoats).toEqual(3);
});

test("Example 3", () => {
    const people = [3, 5, 3, 4];
    const limit = 5;

    const numBoats = numRescueBoats(people, limit);
    expect(numBoats).toEqual(4);
});
