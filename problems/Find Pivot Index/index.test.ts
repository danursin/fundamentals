import { pivotIndex } from ".";

test("Example 1", () => {
    const nums = [1, 7, 3, 6, 5, 6];
    const output = pivotIndex(nums);
    expect(output).toEqual(3);
});

test("Example 2", () => {
    const nums = [1, 2, 3];
    const output = pivotIndex(nums);
    expect(output).toEqual(-1);
});

test("Example 3", () => {
    const nums = [2, 1, -1];
    const output = pivotIndex(nums);
    expect(output).toEqual(0);
});
