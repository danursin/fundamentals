export class MovingAverage {
    size: number;
    values: number[];
    constructor(size: number) {
        this.size = size;
        this.values = [];
    }

    next(val: number): number {
        this.values.unshift(val);
        this.values.splice(this.size, 1);
        let sum = 0;
        for (const val of this.values) {
            sum += val;
        }
        return sum / this.values.length;
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
