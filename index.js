const arr = [4, 11, 5, 79, 454, 67, 31]

function BubbleSort(arr) {
    let temp;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

console.log(BubbleSort(arr));