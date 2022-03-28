// // naive (n) search
// export function search(nums: number[], target: number): boolean {
//     return nums.some((n) => n === target);
// }

function binarySearch(nums: number[], target: number, initialLeft: number, initialRight: number): number {
    let left = initialLeft,
        right = initialRight;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

export function search(nums: number[], target: number): boolean {
    let pivot = 0;
    for (let i = 1; i < nums.length; i += 1) {
        if (nums[i] < nums[i - 1]) {
            pivot = i;
            break;
        }
    }

    if (nums[pivot] === target) {
        return true;
    }

    if (pivot > 0) {
        const leftIndex = binarySearch(nums, target, 0, pivot);
        if (leftIndex !== -1) {
            return true;
        }

        const rightIndex = binarySearch(nums, target, pivot, nums.length - 1);
        return rightIndex !== -1;
    }

    return binarySearch(nums, target, 0, nums.length - 1) !== -1;
}
