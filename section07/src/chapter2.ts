/**
 * map 메서스
 */

const arr = [1, 2, 3];
const newArr = arr.map((item) => item * 2);
//[2,4,6]

//map 메서드를 구연해보자

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map(arr, (item) => item * 2);

map(["hi", "hello"], (it) => parseInt(it));

/**
 * forEach
 */
const arr2 = [1, 2, 3];
arr2.forEach((item) => console.log(item));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr2.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (item) => {
  console.log(item.toFixed());
});
