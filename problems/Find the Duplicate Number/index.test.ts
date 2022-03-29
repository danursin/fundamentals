import { findDuplicate } from ".";

test("Example 1", () => {
    const nums = [1, 3, 4, 2, 2];
    const result = findDuplicate(nums);

    expect(result).toEqual(2);
});

test("Example 2", () => {
    const nums = [3, 1, 3, 4, 2];
    const result = findDuplicate(nums);

    expect(result).toEqual(3);
});
