function findSpecialIntegerNumber_improved(input) {
    if (!input || input.length === 0) {
        return -1; // Handle empty or null array
    }

    const n = input.length;
    // Create a copy to avoid modifying the original, then sort
    const sortedInput = [...input].sort((a, b) => a - b); // O(N log N) time

    // Iterate through the sorted array.
    // We are looking for the smallest `i` (first candidate) such that
    // the block starting with sortedInput[i] fills the rest of the array.
    // This means sortedInput[i] must be equal to sortedInput[n-1].
    for (let i = 0; i < n; i++) {
        if (sortedInput[i] === sortedInput[n - 1]) {
            // If sortedInput[i] === sortedInput[n-1], then all elements
            // from sortedInput[i] through sortedInput[n-1] are identical
            // (because the array is sorted).
            // The count of this candidate (sortedInput[i]) is (n-1) - i + 1 = n - i.
            // The required count for sortedInput[i] to be special is also n - i.
            // Since (n-i) >= (n-i) is true, this candidate is special.
            // As we iterate i from 0, this is the first such candidate.
            return sortedInput[i];
        }
    }
    // This part of the code should effectively not be reached if n > 0,
    // because when i = n-1, sortedInput[n-1] === sortedInput[n-1] is true,
    // and sortedInput[n-1] would be returned.
    // This path is only logically possible if the loop completed without finding anything,
    // which implies an issue or an empty array (already handled).
    return -1;
}

let num = [1000, 999, 200, 55];
console.log(findSpecialIntegerNumber_improved(num))