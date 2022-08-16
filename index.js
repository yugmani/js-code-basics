// Import stylesheets
import './style.css';

// *************************************************
// 3 Easy Ways to Swap 2 Array Elements in JavaScript
// **************************************************

// 1. Temporary Variable
function swapElements(arr, i1, i2) {
  let temp = arr[i1];

  arr[i1] = arr[i2];

  arr[i2] = temp;
}

const arr1 = [1, 2, 3, 4];

swapElements(arr1, 0, 3);
console.log(arr1);
// [4, 2, 3, 1]

//2. Array Destructuring Assignment
function swapArrayElements(arr, i1, i2) {
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}

const arr2 = [1, 2, 3, 4];
swapArrayElements(arr2, 0, 3);

console.log(arr2);
// [4, 2, 3, 1]

// 3. Array splice() Method
function swapBySplice(arr, i1, i2) {
  // const bar = arr.splice(i2, 1, arr[i1]);
  // console.log(bar); //[4]
  // console.log(bar[0]);  //4
  arr[i1] = arr.splice(i2, 1, arr[i1])[0];
}

const arr3 = [1, 2, 3, 4];

swapBySplice(arr3, 0, 3);
console.log(arr3);

// **********************************************************
// How to Remove an Element from an Array by ID in JavaScript
// **********************************************************

const arr = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Peter' },
  { id: 3, name: 'Kate' },
];

function removeObjectWithId(arr, id) {
  const objWithIdIndex = arr.findIndex((obj) => obj.id === id);

  arr.splice(objWithIdIndex, 1);

  return arr;
}

console.log(removeObjectWithId(arr, 2));
/* const arr = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Peter' },  
];
*/

//Avoiding Side Effects
// **********************

function removeObjWithoutSideEffect(arr, id) {
  //Making a copy with the Array.from() method
  const arrCopy = Array.from(arr);

  const objWithIdIndex = arrCopy.findIndex((obj) => obj.id === id);
  arrCopy.splice(objWithIdIndex, 1);

  return arrCopy;
}

const arr4 = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Peter' },
  { id: 3, name: 'Kate' },
];

const resultArr = removeObjWithoutSideEffect(arr4, 2);
console.log(resultArr);
/*
[
  { id: 1, name: 'John' },
  { id: 2, name: 'Peter' },
]
*/

console.log(arr4);
/*
 [
  { id: 1, name: 'John' },
  { id: 2, name: 'Peter' },
  { id: 3, name: 'Kate' },
];
*/
