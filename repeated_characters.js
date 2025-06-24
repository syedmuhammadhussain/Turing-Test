function mostRepeatedChar(string) {
    
    let alphabets = string.replace(/[^a-zA-Z]/g, '')

    let freqMap = {}
    for(let char of alphabets) {
        freqMap[char] = (freqMap[char] || 0) + 1
    }

    let mostFrequentChar = ''
    let mostFrequency = 0

    for(let char in freqMap) {
        if(freqMap[char] > mostFrequency) {
            mostFrequency = freqMap[char]
            mostFrequentChar = char
        }
    }

    return mostFrequentChar
}

s1 = 'Hewwwllo WWWWorld';
console.log(mostRepeatedChar(s1))





















// function mostFrequentCharacter(s) {
//     debugger
    // Filter out non-alphabet characters
//     const filteredString = s.replace(/[^a-zA-Z]/g, '');
    
    // Create a frequency map
//     const frequencyMap = {};
//     for (let char of filteredString) {
//         frequencyMap[char] = (frequencyMap[char] || 0) + 1;
//     }
    
    // Find the most frequent character
//     let mostFrequentChar = '';
//     let maxFrequency = 0;
//     for (let char in frequencyMap) {
//         if (frequencyMap[char] > maxFrequency) {
//             maxFrequency = frequencyMap[char];
//             mostFrequentChar = char;
//         }
//     }
    
//     return mostFrequentChar;
// }

// Example 1
// const s1 = 'abcddefda1111133333333';
// console.log(mostFrequentCharacter(s1));  // Output: 'd'

// Example 2
// const s2 = 'AA0AB0BB0ccc0aa0aw00wo0BBBw123123';
// const s2 = 'AA0AAB0BB0ccc0aa0aw00wo0BBBAAw123123';
// console.log(mostFrequentCharacter(s2));  // Output: 'B'