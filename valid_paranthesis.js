function checkStringIsValid(string) {
    
    let actualbrackets = ['()', '[]', '{}']

    while (string.length > 0) {

        let iniLen = string.length

        for (let bracket of actualbrackets) {
            string = string.split(bracket).join("")
        }

        let finLen = string.length

        if (iniLen === finLen) return false

    }
    return true
}

let inputcheck = checkStringIsValid("()[](({}))")
if (inputcheck) console.log("True")
else console.log("False")
























// function isValid(s) {
//     debugger
//     const bracketCouples = ['()', '[]', '{}'];

//     while (s.length > 0) {
//         let initialLength = s.length;

//         for (let bracketCouple of bracketCouples) {
//             s = s.split(bracketCouple).join('');
//         }

//         let finalLength = s.length;

//         if (initialLength === finalLength) {
//             return false;
//         }
//     }

//     return true;
// }

// // Testing the function
// const line = '[(){}()[({})]';

// if (isValid(line)) {
//     console.log("valid");
// } else {
//     console.log("invalid");
// }