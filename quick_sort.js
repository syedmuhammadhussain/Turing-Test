function quickSort(arr) {
    if(arr.length <= 1) return arr

    let pivot = arr[arr.length - 1]
    let left = []
    let right = []

    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]

}

let numbers = [3, 6, 8, 10, 1, 2, 12]
console.log(quickSort(numbers))





















// function quickSort(nums) {
//     if(nums.length <= 1) return nums

//     let pivot = nums[nums.length - 1] // 12
//     let left = []
//     let right = []

//     for (let i = 0; i < nums.length - 1; i++) {
//         if(nums[i] < pivot) {
//             left.push(nums[i])
//         } else {
//             right.push(nums[i])
//         }
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)]
// }

// let numbers = [3, 6, 8, 10, 1, 2, 12]
// console.log(quickSort(numbers))