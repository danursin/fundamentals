export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export const listToArray = (list: ListNode | null): number[] => {
    if (!list) {
        return [];
    }
    const array = [list.val];
    let node = list.next;
    while (node) {
        array.push(node.val);
        node = node.next;
    }
    return array;
};

export const listFromArray = (nums: number[]): ListNode | null => {
    if (!nums.length) {
        return null;
    }
    const [first, ...rest] = nums;
    return new ListNode(first, listFromArray(rest));
};

export const makeSameLength = (l1: ListNode, l2: ListNode): void => {
    if (!l1.next && !l2.next) {
        return;
    }

    if (!l1.next) {
        l1.next = new ListNode(0);
    }

    if (!l2.next) {
        l2.next = new ListNode(0);
    }

    makeSameLength(l1.next, l2.next);
};

function sumNodes(l1: ListNode, l2: ListNode, carryOne: boolean): ListNode | null {
    let localSum = l1.val + l2.val;
    if (carryOne) {
        localSum += 1;
    }

    const localCarryOne = localSum > 9;
    if (localCarryOne) {
        localSum -= 10;
    }

    if (!l1.next || !l2.next) {
        return new ListNode(localSum, localCarryOne ? new ListNode(1) : undefined);
    }

    return new ListNode(localSum, sumNodes(l1.next, l2.next, localCarryOne));
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1 && !l2) {
        return null;
    }

    if (!l1) {
        return l2;
    }

    if (!l2) {
        return l1;
    }

    makeSameLength(l1, l2);

    return sumNodes(l1, l2, false);
}
