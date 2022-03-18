export function pivotIndex(nums: number[]): number {
    const solution = -1;

    for (let i = 0; i < nums.length; i += 1) {
        const left = nums.slice(0, i);
        const right = nums.slice(i + 1);

        const leftSum = left.reduce((prev, cur) => prev + cur, 0);
        const rightSum = right.reduce((prev, cur) => prev + cur, 0);

        if (leftSum === rightSum) {
            return i;
        }
    }

    return solution;
}
