export function shortestDistance(wordsDict: string[], word1: string, word2: string): number {
    // const indexOfWord1 = wordsDict.indexOf(word1);
    // const indexOfWord2 = wordsDict.indexOf(word2);
    // return Math.abs(indexOfWord1 - indexOfWord2);

    const indicesOfWord1: number[] = [];
    const indicesOfWord2: number[] = [];
    for (let i = 0; i < wordsDict.length; i += 1) {
        if (wordsDict[i] === word1) {
            indicesOfWord1.push(i);
        }
        if (wordsDict[i] === word2) {
            indicesOfWord2.push(i);
        }
    }

    let min = Number.POSITIVE_INFINITY;
    for (const word1Index of indicesOfWord1) {
        for (const word2Index of indicesOfWord2) {
            const distance = Math.abs(word1Index - word2Index);
            if (distance < min) {
                min = distance;
            }
        }
    }
    return min;
}
