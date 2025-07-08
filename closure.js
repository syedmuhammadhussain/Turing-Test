// ****** Lexical Scope: ******
// jab outer function chala usne count ko 0 kr diya lekin jab inner function
// chala tu usne 1 increment kr liya aur next time inner function apne lexical scope ko yad
// rkhta h isi waja kr wo 0 k bjaye 1 yani updated value uthata h aur us mai increment krta h
// yehi magic h closure ka

function example1() {
  function outer() {
    let count = 0;
    return function inner() {
      count++;
      console.log(count);
    };
  }
  const counter = outer();
  counter();
  counter();
}

example1();
