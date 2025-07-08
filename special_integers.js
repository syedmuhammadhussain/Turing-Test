function findSpecialIntegerNumber(nums) {
    if (nums) {
        nums.sort() // sort into assecending order

        for (let i = 0; i < nums.length; i++) {
            let x = nums.length - i
            if (nums[i] >= x)
                if (i === 0 || nums[i - 1] < x) return x

        }
        return -1
    }
}

// let nums = [0, 4, 1, 0, 4];
let nums = [1000, 999, 200, 55];
console.log(findSpecialIntegerNumber(nums))




















// function findSpecialInteger(nums) {
//     debugger
//     nums.sort() // Sort the array in ascending order
//     let n = nums.length;

//     for (let i = 0; i < n; i++) {
//         let x = n - i; // Number of elements greater than or equal to nums[i]
//         if (nums[i] >= x) {
//             // Check if there are exactly x elements greater than or equal to x
//             if (i === 0 || nums[i - 1] < x) {
//                 return x;
//             }
//         }
//     }
//     return -1; // No special integer found
// }

// // let nums = [0, 4, 1, 0, 4];
// let nums = [1, 2, 3, 4, 5];
// console.log(findSpecialInteger(nums));