function intervalMerged(list) { // [[1,3],[2,6],[8,10],[15,18]]
    debugger
    if (list.length === 0) return []

    const merged = [list[0]] // [[1,3]] => [[1,3], [8,10], [15,18]]

    for (let i = 1; i < list.length; i++) {
        const last = merged[merged.length - 1] // [1,3] => [1, 6]
        const current = list[i] // [2,6] => [8,10] => [15,18]

        if (current[0] <= last[1]) {
            last[1] = Math.max(current[1], last[1])
        } else {
            merged.push(current)
        }
    }

    return merged
}

let intV = [[1, 3], [2, 6], [8, 10], [15, 18]]
console.log(intervalMerged(intV))





















// function mergeIntervals(intervals) {
//     debugger
//     if (intervals.length === 0) return [];

//     intervals.sort((a, b) => a[0] - b[0]); // asscending order
//     console.log(intervals)

//     const merged = [intervals[0]]; // [[1,3]] => [[1,3], [8,10], [15,18]]

//     for (let i = 1; i < intervals.length; i++) {
//         const last = merged[merged.length - 1]; // [1,3] => [1,6]
//         const current = intervals[i]; // [2,6], [8,10], [15, 18]

//         if (current[0] <= last[1]) {
//             last[1] = Math.max(last[1], current[1]); // from here merged updates
//         } else {
//             merged.push(current);
//         }
//     }

//     return merged;
// };

// let intervals = [[1,3],[2,6],[8,10],[15,18]]
// console.log(mergeIntervals(intervals))