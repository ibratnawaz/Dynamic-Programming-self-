/******************** MERGE SORT ********************/
// sort two sorted arrays into one in ascending order.
// e.x : [1,5,6] [4,7,9,10] into [1,4,5,6,8,9,10]
function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let arr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    arr.push(arr1[i++]);
  }
  while (j < arr2.length) {
    arr.push(arr2[j++]);
  }
  return arr;
}

// divide the array into single element array and
// then sort it using merge() and return the sorted array.
function mergeSort(arr) {
  if (arr.length == 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

let data;
data = [10, 24, 76, 73];
// creating array of length n
// data=Array.apply(null,{length:10000}).map(Function.call,Math.random);
console.log(mergeSort(data));
