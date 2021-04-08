const arr = [4, 11, 5, 79, 454, 67, 31]
// 冒泡排序
// function BubbleSort(arr) {
//     let temp;
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     return arr
// }

// console.log(BubbleSort(arr));

// function SelectSort(arr) {
//     let minIndex, temp;
//     for (let i = 0; i < arr.length; i++) {
//         minIndex = i
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j
//             }
//         }
//         temp = arr[i]
//         arr[i] = arr[minIndex]
//         arr[minIndex] = temp
//     }
//     return arr
// }

// console.log(SelectSort(arr));
// function insertSort(arr) {
//     let cur, prev
//     for (let i = 1; i < arr.length; i++) {
//         cur = arr[i]
//         prev = i - 1
//         while (prev >= 0 && arr[prev] > cur) {
//             arr[prev + 1] = arr[prev]
//             prev--
//         }
//         arr[prev + 1] = cur
//     }
//     return arr
// }

// console.log(insertSort(arr));

function quickSort(arr) {
    if (arr.length <= 1) return arr
    let middleIndex = Math.floor(arr.length / 2)
    let middleValue = arr.splice(middleIndex, 1)[0]
    let arrLeft = []
    let arrRight = []
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        middleValue > item ? arrLeft.push(item) : arrRight.push(item)
    }
    return quickSort(arrLeft).concat(middleValue, quickSort(arrRight))
}

console.log(quickSort(arr));