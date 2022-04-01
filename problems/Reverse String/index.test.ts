import { reverseString } from ".";

test("Example 1", () => {
    const s = ["h", "e", "l", "l", "o"];
    reverseString(s);
    expect(s).toEqual(["o", "l", "l", "e", "h"]);
});

test("Example 2", () => {
    const s = ["H", "a", "n", "n", "a", "h"];
    reverseString(s);
    expect(s).toEqual(["h", "a", "n", "n", "a", "H"]);
});
