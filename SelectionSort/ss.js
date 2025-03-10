function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                const swapElement = arr[i];
                arr[i] = arr[j];
                arr[j] = swapElement;
            }
        }
    }

    return arr;
}



let arr = [4, 2, 5, 1, 3];
console.log(selectionSort(arr))