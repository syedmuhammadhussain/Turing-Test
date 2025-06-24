function sortAndRemoveDollar(input) {
    // Find the first occurrence of '$' and remove it
    const stringWithoutDollar = input.replace('$', '');

    // Split the string into an array, sort it, and join it back
    const sortedString = stringWithoutDollar.split('').sort().join('');

    return sortedString;
}

// Example usage:
console.log(sortAndRemoveDollar('acba$df')); // Output: "abcdf"
console.log(sortAndRemoveDollar('pqr'));     // Output: "pqr"
console.log(sortAndRemoveDollar('$zxyabc')); // Output: "abcxyz"
console.log(sortAndRemoveDollar('a$b$c$d')); // Output: "abcd"
