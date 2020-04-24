function setDifference(setA, setB) {
    let result = new Set(setA);
    for (let item of setB) {
        result.delete(item);
    }
    return result;
}

let setA = new Set([2, 3, 4]);
let setB = new Set([3, 4, 5]);
console.log(setDifference(setA, setB));