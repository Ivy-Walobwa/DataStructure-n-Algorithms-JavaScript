 function union(setA, setB) {
    let result = new Set(setA);
    for (let elem of setB) {
        result.add(elem);
    }
    return result;
}

let setA = new Set([1, 2, 3]);
let setB = new Set([3, 4, 5]);
console.log(union(setA, setB));