function mergeSort(arr) {
    let length = arr.length

    // if  n is not > 1 
    // list is considered sorted
    if (length === 1) {
        return arr;
    }

    let midIdx = Math.ceil(length / 2);
    let leftHalf = arr.slice(0, midIdx);
    let rightHalf = arr.slice(midIdx, length);

    leftHalf = mergeSort(leftHalf);
    rightHalf = mergeSort(rightHalf);

    return merge(leftHalf, rightHalf)
}

// merge both halfs 
function merge(leftHalf, rightHalf) {
    const sorted = []
    while (leftHalf.length > 0 && rightHalf.length > 0) {
        const leftItem = leftHalf[0]
        const rightItem = rightHalf[0]

        if (leftItem > rightItem) {
            sorted.push(rightItem)
            rightHalf.shift()
        } else {
            sorted.push(leftItem);
            leftHalf.shift()
        }
    }

    // if left half is not empty
    while (leftHalf.length !== 0) {
        sorted.push(leftHalf[0])
        leftHalf.shift()
    }
    // if right half is not empty
    while (rightHalf.length !== 0) {
        sorted.push(rightHalf[0])
        rightHalf.shift()
    }

    return sorted;
}

let arr = [4, 2, 5, 1, 3];
console.log(mergeSort(arr));