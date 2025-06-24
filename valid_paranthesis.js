/**
 * Checks if a string has valid and balanced parentheses, brackets, and braces.
 *
 * @param {string} s The input string to validate.
 * @returns {boolean} True if the string has valid parentheses, false otherwise.
 */
function isValidParentheses(s) {
    // The stack will store opening brackets encountered so far.
    const stack = [];

    // A map to store the pairs of matching brackets.
    // Keys are closing brackets, values are their corresponding opening brackets.
    const bracketPairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    // Iterate through each character in the input string.
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // Check if the character is an opening bracket.
        // Opening brackets are '(', '[', '{'.
        // These are not keys in `bracketPairs`.
        if (char === '(' || char === '[' || char === '{') {
            // If it's an opening bracket, push it onto the stack.
            stack.push(char);
        }
        // Check if the character is a closing bracket.
        // Closing brackets are ')', ']', '}'.
        // These are keys in `bracketPairs`.
        else if (bracketPairs[char]) {
            // If it's a closing bracket, there are two conditions for invalidity:
            // 1. The stack is empty: This means a closing bracket appeared without a matching opening bracket.
            // 2. The top of the stack does not match the current closing bracket's corresponding opening bracket.
            if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
                return false; // Invalid parentheses.
            }
        }
        // Optional: If the string can contain characters other than brackets,
        // you might want to decide how to handle them (e.g., ignore them or treat as invalid).
        // For this standard problem, we typically assume only bracket characters or that others should be ignored.
        // If non-bracket characters should invalidate the string, add an else condition:
        // else { return false; // Invalid character }
    }

    // After iterating through the entire string,
    // if the stack is empty, all opening brackets have been matched and closed.
    // If the stack is not empty, there are unclosed opening brackets.
    return stack.length === 0;
}

// Example Usage:
// console.log(isValidParentheses("()")); // true
// console.log(isValidParentheses("()[]{}")); // true
// console.log(isValidParentheses("(]")); // false
// console.log(isValidParentheses("([)]")); // false
// console.log(isValidParentheses("{[]}")); // true
// console.log(isValidParentheses("")); // true
// console.log(isValidParentheses("(((")); // false
// console.log(isValidParentheses(")))")); // false
// console.log(isValidParentheses("({[}])")); // false (mismatched nested)
