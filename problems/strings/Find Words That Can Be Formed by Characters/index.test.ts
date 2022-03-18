import { countCharacters } from ".";

test("Example 1", () => {
    const words = ["cat", "bt", "hat", "tree"];
    const chars = "atach";

    const result = countCharacters(words, chars);

    expect(result).toEqual(6);
});

test("Example 1", () => {
    const words = ["hello", "world", "leetcode"];
    const chars = "welldonehoneyr";

    const result = countCharacters(words, chars);

    expect(result).toEqual(10);
});
