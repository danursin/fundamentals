import { search } from ".";

test("Example 1", () => {
    const nums = [-1, 0, 3, 5, 9, 12];
    const target = 9;
    const result = search(nums, target);
    expect(result).toEqual(4);
});

test("Example 2", () => {
    const nums = [-1, 0, 3, 5, 9, 12];
    const target = 2;
    const result = search(nums, target);
    expect(result).toEqual(-1);
});

test("Example 3", () => {
    const nums = [2, 5];
    const target = 5;
    const result = search(nums, target);
    expect(result).toEqual(1);
});
