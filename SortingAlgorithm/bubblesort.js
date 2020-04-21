function bubbleSort(arr) {
    let swapCounter = 1;

    while (swapCounter) {
        swapCounter = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const swapElement = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = swapElement;
                swapCounter = 1;
            }
        }
    }

    return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(arr))
