export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

export function findTilt(root: TreeNode | null): number {
    let sum = 0;
    function subtreeSum(root: TreeNode | null): number {
        if (!root) {
            return 0;
        }
        const leftSum = subtreeSum(root.left);
        const rightSum = subtreeSum(root.right);
        const tilt = Math.abs(leftSum - rightSum);
        sum += tilt;

        return root.val + leftSum + rightSum;
    }
    subtreeSum(root);
    return sum;
}
