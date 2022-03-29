export function disappear(grid: number[][], x: number, y: number): number {
    const visited: [number, number][] = [];

    const width = grid[0].length;
    const height = grid.length;

    let count = 0;
    const compareVal = grid[x][y];

    function helper(x_inner: number, y_inner: number): void {
        if (visited.some(([valx, valy]) => valx === x_inner && valy === y_inner)) {
            return;
        }

        visited.push([x_inner, y_inner]);

        if (grid[x_inner][y_inner] === compareVal) {
            count += 1;
        } else {
            return;
        }

        if (x_inner - 1 >= 0) {
            helper(x_inner - 1, y_inner);
        }
        if (x_inner + 1 < height) {
            helper(x_inner + 1, y_inner);
        }
        if (y_inner - 1 >= 0) {
            helper(x_inner, y_inner - 1);
        }
        if (y_inner + 1 < width) {
            helper(x_inner, y_inner + 1);
        }
    }

    helper(x, y);

    return count;
}
