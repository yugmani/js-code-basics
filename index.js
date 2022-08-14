// Import stylesheets
import './style.css';

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
