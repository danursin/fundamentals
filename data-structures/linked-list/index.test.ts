import LinkedList from "./index";

test("Initialized list has length 1 initialized with truthy", () => {
    const list = new LinkedList<number>(5);
    expect(list.length()).toEqual(1);
});

test("Initialized list has length 1 initialized with falsey", () => {
    const list = new LinkedList<number>(0);
    expect(list.length()).toEqual(1);
});

test("Uninitialized list has length 0", () => {
    const list = new LinkedList<number>();
    expect(list.length()).toEqual(0);
});

test("Length after push from initialized list", () => {
    const list = new LinkedList<number>(0);
    for (let i = 1; i <= 5; i += 1) {
        list.push(i);
    }
    expect(list.length()).toEqual(6);
});

test("Length after push from uninitialized list", () => {
    const list = new LinkedList<number>();
    for (let i = 1; i <= 5; i += 1) {
        list.push(i);
    }
    expect(list.length()).toEqual(5);
});

test("Tail with no initialization", () => {
    const list = new LinkedList();
    expect(() => list.tail()).toThrow();
});
