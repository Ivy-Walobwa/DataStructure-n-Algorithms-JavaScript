function swap(arr, leftIndex, rightIndex) {
    const temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
}

function partition(arr, left, right) {
    let pivot = arr[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        // while left pointer is less than pivot
        // move pointer to the right
        while (arr[i] < pivot) {
            i++;
        }
        // while righ pointer is greater than pivot
        // move pointer to the left
        while (arr[j] > pivot) {
            j--;
        }

        // if left pointer is less than or equal to right pointe
        // swap elements
        // increment left pointer n decrement right pointer
        if (i <= j) {
            swap(arr, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i; // index of left pointer
}

function quickSort(arr, left, right) {
    let index;
    if (arr.length > 1) {
        index = partition(arr, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(arr, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(arr, index, right);
        }
    }
    return arr;
}


let arr = [4, 2, 5, 1, 3];
console.log(quickSort(arr, 0, arr.length - 1));