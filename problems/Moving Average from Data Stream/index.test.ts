import { MovingAverage } from ".";

test("Example 1", () => {
    const initialValue = 3;

    const values = [1, 10, 3, 5];
    const outputs = [1.0, 5.5, 4.66667, 6.0];

    const avg = new MovingAverage(initialValue);
    for (let i = 0; i < values.length; i += 1) {
        const output = avg.next(values[i]);
        expect(output).toBeCloseTo(outputs[i]);
    }
});
