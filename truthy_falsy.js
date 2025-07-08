function example1() {
  console.log("" || "fallback");
}

function example2() {
  console.log(0 && "Hello");
}

function example3() {
  console.log("Hi" && 0);
}

function example4() {
  console.log(null || undefined || "Default");
}

function example5() {
  console.log(undefined && "exists");
}

function example6() {
  const name = "Ali";
  const isLoggedIn = true;
  console.log(isLoggedIn && name);
}

function example7() {
  console.log(false || 0 || null || "Yes" || "No");
}

function example8() {
  console.log("value" && true && 100);
}

function example9() {
  console.log("test" || (true && false));
}

function example10() {
  const val = null;
  console.log((val || "default") && "final");
}

example10();
