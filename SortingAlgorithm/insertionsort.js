function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++){
        let unsorted = arr[i];
        let sortedIdx = i - 1;

        while (sortedIdx >= 0 && unsorted < arr[sortedIdx]) {
            arr[sortedIdx + 1] = arr[sortedIdx];
            sortedIdx -= 1;
        }
        arr[sortedIdx + 1] = unsorted;
    }
    return arr;
}

let arr = [4, 2, 5, 1, 3];
console.log(insertionSort(arr)) 