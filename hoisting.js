// ****** What is hoisting and temporal dead zone?
// Hoisting is the the machenism of javascript variable declaration and its initailization ******
// When javascript engine runs the code it hoists (moves) all 'var' declarations to the top of their scope

console.log(x)
var x
x = 5



// So internally, the code is interpreted like this:
// var x;         // declaration is hoisted to the top
// console.log(x);
// x = 0;         // assignment happens here

// 'let' is also hoisted, BUT…
// It goes into something called the Temporal Dead Zone (TDZ).
// That means: You cannot access y before its declaration.
// So this line will throw a ReferenceError ❌

// Function declarations are hoisted with their body, unlike function expressions.

function example1() {
  console.log(a); // undefined
  var a = 5;
}

function example2() {
  console.log(b); // Referrence Error -> TDZ
  let b = 10;
}

function example3() {
  greet();
  function greet() { // Global state
    console.log("Hello!"); // Hello
  }
}

function example4() {
  greet();
  var greet = function () {
    console.log("Hi!"); // TypeError (due to access the undefined value in the greet)
  };
}

function example5() {
  function test() {
    console.log(x); // undefined
    var x = 1;
  }
  test();
}

function example6() {
  {
    console.log(a); // Referrence Error -> TDZ
    let a = 2;
  }
}

function example7() {
  var a = 1; // global scope window.object.x
  function foo() {
    console.log(a); // undefined
    var a = 2;
  }
  foo();
}

function example8() {
  function foo() {
    console.log(bar);
    var bar = 10;
    function bar() {}
  }
  foo();
}

function example9() {
  console.log(x); // Referrence Error
  const x = 3;
}

function example10() {
  var a = 10;
  function foo() {
    console.log(a); // undefined
    var a = 20;
  }
  foo();
}

example10();
