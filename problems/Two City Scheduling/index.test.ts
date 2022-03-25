import { twoCitySchedCost } from ".";

test("Example 1", () => {
    const costs = [
        [10, 20],
        [30, 200],
        [400, 50],
        [30, 20]
    ];
    const result = twoCitySchedCost(costs);
    expect(result).toBe(110);
});

test("Example 2", () => {
    const costs = [
        [259, 770],
        [448, 54],
        [926, 667],
        [184, 139],
        [840, 118],
        [577, 469]
    ];
    const result = twoCitySchedCost(costs);
    expect(result).toBe(1859);
});

test("Example 3", () => {
    const costs = [
        [515, 563],
        [451, 713],
        [537, 709],
        [343, 819],
        [855, 779],
        [457, 60],
        [650, 359],
        [631, 42]
    ];
    const result = twoCitySchedCost(costs);
    expect(result).toBe(3086);
});
