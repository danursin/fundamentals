export function numRescueBoats(people: number[], limit: number): number {
    const weightMap: { [weight: number]: number[] } = {};
    people.forEach((personWeight) => {
        if (!weightMap[personWeight]) {
            weightMap[personWeight] = [];
        }
        weightMap[personWeight].push(personWeight);
    });

    const boats: ([number, number] | [number])[] = [];

    while (people.length) {
        const personWeight = people.pop() as number;
        weightMap[personWeight].pop();

        const boat: [number, number] | [number] = [personWeight];
        const extraSpace = limit - personWeight;
        if (extraSpace > 0) {
            for (let weight = extraSpace; weight >= 1; weight -= 1) {
                const otherPersonWeight = weightMap[weight]?.pop();
                if (otherPersonWeight) {
                    people.splice(people.indexOf(otherPersonWeight), 1);
                    boat.push(otherPersonWeight);
                    break;
                }
            }
        }
        boats.push(boat);
    }

    return boats.length;
}
