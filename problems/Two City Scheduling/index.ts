export function twoCitySchedCost(costs: number[][]): number {
    const greedy = costs.map((c) => [c[0], c[1], c[0] - c[1]]);

    greedy.sort((a, b) => {
        return a[2] - b[2];
    });

    let sum = 0;
    for (let i = 0; i < greedy.length; i += 1) {
        if (i < greedy.length / 2) {
            sum += greedy[i][0];
        } else {
            sum += greedy[i][1];
        }
    }
    return sum;
}
