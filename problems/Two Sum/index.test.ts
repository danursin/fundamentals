import { twoSum } from ".";

test("Example 1", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;

    const output = twoSum(nums, target);

    expect(output).toEqual([0, 1]);
});

test("Example 2", () => {
    const nums = [3, 2, 4];
    const target = 6;

    const output = twoSum(nums, target);

    expect(output).toEqual([1, 2]);
});

test("Example 3", () => {
    const nums = [3, 3];
    const target = 6;

    const output = twoSum(nums, target);

    expect(output).toEqual([0, 1]);
});
