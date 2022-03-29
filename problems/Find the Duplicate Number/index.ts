function getCount(nums: number[], target: number): number {
    let count = 0;
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] === target) {
            count += 1;
        }
    }
    return count;
}

export function findDuplicate(nums: number[]): number {
    let duplicate = -1;
    const leftNumber = 1,
        rightNumber = nums.length - 1;

    while (leftNumber <= rightNumber) {
        const midNumber = Math.floor((leftNumber + rightNumber) / 2);
        const comparisonValue = nums[midNumber];
        const val = getCount(nums, comparisonValue);
        if (val > 1) {
            duplicate = midNumber;
        } else {
        }
    }

    return -1;
}
