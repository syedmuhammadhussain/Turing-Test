// ******* What is deep and shallow copy? *******
// Deep copy it copies entire object or array with its all level of property and its references as well
// Shallow copy it just copies top level of properties

// Example 1 (a)
function example1() {
  const obj1 = { a: 1 };
  const obj2 = obj1;
  obj2.a = 2;
  console.log(obj1.a); // 1
}

// Example 1 (b)
function example2() {
  const obj1 = { a: 1 };
  const obj2 = { ...obj1 }; 
  obj2.a = 2;
  console.log(obj1.a);
}

// Example 2
function example3() {
  const obj1 = { a: { b: 1 } };
  const obj2 = { ...obj1 };
  obj2.a.b = 2;
  console.log(obj1.a.b);
}

function example4() {
  const obj1 = { a: { b: 1 } };
  const obj2 = JSON.parse(JSON.stringify(obj1)); // Deep copy (works all level)
  obj2.a.b = 99;
  console.log(obj1.a.b);
}

function example5() {
  const obj1 = { data: { score: 50 } };
  const obj2 = structuredClone(obj1); // Deep copy with structuredClone
  obj2.data.score = 100;
  console.log(obj1.data.score);
}

function example6() {
  const arr1 = [1, 2, [3, 4]];
  const arr2 = [...arr1]; // Shallow copy (works only top level not nested)
  arr2[2][0] = 99;
  console.log(arr1[2][0]);
}

function example7() {
  debugger
  const obj1 = {
    date: new Date(),
    value: 42,
  };
  const obj2 = JSON.parse(JSON.stringify(obj1)); // Deep Copy
  console.log(typeof obj2.date);
}

function example8() {
  const obj1 = {
    greet: function () {
      return "Hi";
    },
  };
  const obj2 = JSON.parse(JSON.stringify(obj1)); // Deep copy
  console.log(typeof obj2.greet);
}

function example9() {
  const obj1 = {
    name: "Ali",
    address: { city: "Lahore" },
  };
  const obj2 = { ...obj1, address: { ...obj1.address } };
  obj2.address.city = "Karachi";
  console.log(obj1.address.city);
}

example7();
