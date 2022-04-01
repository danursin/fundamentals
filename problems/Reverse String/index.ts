export function reverseString(s: string[]): void {
    let temp: string;
    let oppositeIndex: number;
    for (let i = 0; i < s.length / 2; i += 1) {
        temp = s[i];
        oppositeIndex = s.length - i - 1;
        s[i] = s[oppositeIndex];
        s[oppositeIndex] = temp;
    }
}
