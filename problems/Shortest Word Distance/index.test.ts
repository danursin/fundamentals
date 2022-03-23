import { shortestDistance } from ".";

test("Example 1", () => {
    const wordsDict = ["practice", "makes", "perfect", "coding", "makes"];
    const word1 = "coding";
    const word2 = "practice";

    const distance = shortestDistance(wordsDict, word1, word2);

    expect(distance).toEqual(3);
});

test("Example 2", () => {
    const wordsDict = ["practice", "makes", "perfect", "coding", "makes"];
    const word1 = "makes";
    const word2 = "coding";

    const distance = shortestDistance(wordsDict, word1, word2);

    expect(distance).toEqual(1);
});
