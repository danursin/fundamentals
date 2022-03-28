import { search } from ".";

test("Example 1", () => {
    const nums = [2, 5, 6, 0, 0, 1, 2];
    const target = 0;
    const result = search(nums, target);

    expect(result).toEqual(true);
});

test("Example 2", () => {
    const nums = [2, 5, 6, 0, 0, 1, 2];
    const target = 3;
    const result = search(nums, target);

    expect(result).toEqual(false);
});
