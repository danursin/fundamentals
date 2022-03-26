export function search(nums: number[], target: number): number {
    let left = 0,
        right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const current = nums[mid];
        if (current === target) {
            return mid;
        }

        if (current < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
