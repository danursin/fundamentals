/**
 Do not return anything, modify nums1 in-place instead.
 */

export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    for (let i = 0; i < nums2.length; i += 1) {
        nums1[m + i] = nums2[i];
    }
    nums1.sort();
}
