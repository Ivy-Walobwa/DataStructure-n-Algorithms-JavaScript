function intersection(setA, setB) {
    let result = new Set();
    for (let elem of setA) {
        if (setB.has(elem)){
            result.add(elem);
        }
    }
    return result;
}

let setA = new Set([1, 2, 3]);
let setB = new Set([2, 3, 4]);
console.log(intersection(setA, setB));