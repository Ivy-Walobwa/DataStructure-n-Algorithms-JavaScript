function symmetricDifference(setA, setB) {
    let difference = new Set(setA);
    for (let elem of setB) {
        if (difference.has(elem)) {
            difference.delete(elem);
        } else {
            difference.add(elem)
        }
    }
    return difference;
}

let setA = new Set([1, 2, 3]);
let setB = new Set([2, 3, 4]);
console.log(symmetricDifference(setA, setB));