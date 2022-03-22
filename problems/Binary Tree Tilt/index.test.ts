import { TreeNode, findTilt } from ".";

test("Example 1", () => {
    const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));

    const result = findTilt(root);
    expect(result).toEqual(1);
});

test("Example 2", () => {
    const root = new TreeNode(4, new TreeNode(2, new TreeNode(3), new TreeNode(5)), new TreeNode(9, null, new TreeNode(7)));

    const result = findTilt(root);
    expect(result).toEqual(result);
});

test("Example 3", () => {
    const root = new TreeNode(
        21,
        new TreeNode(7, new TreeNode(1, new TreeNode(3), new TreeNode(3)), new TreeNode(1)),
        new TreeNode(14, new TreeNode(2), new TreeNode(2))
    );

    const result = findTilt(root);
    expect(result).toEqual(result);
});
