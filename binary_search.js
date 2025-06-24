function binarySearch(arr, target) {

    let left = 0
    let right = arr.length - 1

    while(left <= right) {
        let mid = Math.floor((left + right) / 2)

        if(arr[mid] === target) return mid
        else if (arr[mid] < target) left = mid + 1
        else right - 1
    }

    return -1
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(binarySearch(array, 8))