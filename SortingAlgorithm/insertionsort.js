function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++){
        let unsorted = arr[i];
        let idx = i - 1;

        while (idx >= 0 && unsorted < arr[idx]) {
            arr[idx + 1] = arr[idx];
            idx -= 1;
        }
        arr[idx + 1] = unsorted;
    }
    return arr;
}

let arr = [4, 2, 5, 1, 3];
console.log(insertionSort(arr)) 