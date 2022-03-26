import { disappear } from ".";

test("Grid 1", () => {
    const grid1 = [
        [4, 4, 4, 4],
        [5, 5, 5, 4],
        [2, 5, 7, 5]
    ];
    expect(disappear(grid1, 0, 0)).toEqual(5);
    expect(disappear(grid1, 1, 1)).toEqual(4);
    expect(disappear(grid1, 1, 0)).toEqual(4);
});

test("Grid 2", () => {
    const grid2 = [
        [0, 3, 3, 3, 3, 3, 3],
        [0, 1, 1, 1, 1, 1, 3],
        [0, 2, 2, 0, 2, 1, 4],
        [0, 1, 2, 2, 2, 1, 3],
        [0, 1, 1, 1, 1, 1, 3],
        [0, 0, 0, 0, 0, 0, 0]
    ];
    expect(disappear(grid2, 0, 0)).toEqual(12);
    expect(disappear(grid2, 3, 0)).toEqual(12);
    expect(disappear(grid2, 1, 1)).toEqual(13);
    expect(disappear(grid2, 2, 2)).toEqual(6);
    expect(disappear(grid2, 0, 3)).toEqual(7);
});

test("Grid 3", () => {
    const grid3 = [[0]];
    expect(disappear(grid3, 0, 0)).toEqual(1);
});

test("Grid 4", () => {
    const grid4 = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ];
    expect(disappear(grid4, 0, 0)).toEqual(9);
});
