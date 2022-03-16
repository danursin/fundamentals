import { ListNode, addTwoNumbers, listFromArray, listToArray, makeSameLength } from ".";

test("Can input/output list/array", () => {
    const input = [2, 4, 3];
    const list = listFromArray(input);
    expect(list).not.toBeNull();
    expect(listToArray(list)).toEqual(input);
});

test("Make lists same length", () => {
    const l1 = listFromArray([1, 2, 3, 4, 5]);
    const l2 = listFromArray([7, 8]);

    makeSameLength(l1 as ListNode, l2 as ListNode);
    expect(listToArray(l2)).toEqual([7, 8, 0, 0, 0]);
});

test("Example 1", () => {
    const l1 = listFromArray([2, 4, 3]);
    const l2 = listFromArray([5, 6, 4]);
    const result = addTwoNumbers(l1, l2);

    expect(result).not.toBeNull();
    expect(listToArray(result)).toEqual([7, 0, 8]);
});

test("Example 2", () => {
    const l1 = listFromArray([0]);
    const l2 = listFromArray([0]);
    const result = addTwoNumbers(l1, l2);

    expect(result).not.toBeNull();
    expect(listToArray(result)).toEqual([0]);
});

test("Example 3", () => {
    const l1 = listFromArray([9, 9, 9, 9, 9, 9, 9]);
    const l2 = listFromArray([9, 9, 9, 9]);
    const result = addTwoNumbers(l1, l2);

    expect(result).not.toBeNull();
    expect(listToArray(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
});
