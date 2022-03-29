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
    expect(listToArray(l1)).toEqual([1, 2, 3, 4, 5]);
    expect(listToArray(l2)).toEqual([7, 8, 0, 0, 0]);
});

test("Make lists same length reversed", () => {
    const l1 = listFromArray([7, 8]);
    const l2 = listFromArray([1, 2, 3, 4, 5]);

    makeSameLength(l1 as ListNode, l2 as ListNode);
    expect(listToArray(l1)).toEqual([7, 8, 0, 0, 0]);
    expect(listToArray(l2)).toEqual([1, 2, 3, 4, 5]);
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

test("Empty list is empty array", () => {
    expect(listToArray(null)).toEqual([]);
});

test("Add two null lists", () => {
    expect(addTwoNumbers(null, null)).toEqual(null);
});

test("List 1 null returns list 2", () => {
    const l = listFromArray([1, 2, 3]);
    expect(addTwoNumbers(null, l)).toEqual(l);
});

test("List 2 null returns list 1", () => {
    const l = listFromArray([1, 2, 3]);
    expect(addTwoNumbers(l, null)).toEqual(l);
});
