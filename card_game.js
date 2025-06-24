function maxPoints(cards) {
    debugger
    const countMap = {}; // Count occurrences of each card value
    let maxValue = 0;

    // Build frequency map
    for (let card of cards) { // [3,3,5,6]
        countMap[card] = (countMap[card] || 0) + card; // { "3": 3 + 3 = 6, "5": 5, 6: 6 }
        maxValue = Math.max(maxValue, card);
    }

    // Create DP array based on maximum value found
    const dp = new Array(maxValue + 1).fill(0); // [0, 1, 2, 3, 4, 5, 6]

    for (let value in countMap) {
        dp[value] = countMap[value]; // dp = [0, 0, 0, 6, 0, 5, 6]
    }

    // House Robber DP Technique
    for (let i = 2; i <= maxValue; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + dp[i]); // dp = [0, 0, 0, 6, 6, 11, 12]
    }

    return dp[maxValue];
}

console.log(maxPoints([3, 3, 5, 6]));  // Output: 12
console.log(maxPoints([10, 4, 9, 9])); // Output: 22