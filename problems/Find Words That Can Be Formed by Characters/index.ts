export function countCharacters(words: string[], chars: string): number {
    let count = 0;
    for (const word of words) {
        const availableChars = chars.split("");
        const wordChars = word.split("");
        let canSpellWord = true;
        for (const wordChar of wordChars) {
            const index = availableChars.indexOf(wordChar);
            if (index === -1) {
                canSpellWord = false;
                break;
            }
            availableChars.splice(index, 1);
        }
        if (canSpellWord) {
            count += word.length;
        }
    }
    return count;
}
