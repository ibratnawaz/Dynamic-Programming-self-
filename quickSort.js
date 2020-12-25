// function to get the sorted index of pivot element
// i.e. [5,7,6,1,9,12,100,-3], pivot element is 5
// and it's sorted position is 2 which is return from this function

function indexOfPivot(arr, start = 0, end = arr.length) {
  let pivot = arr[start];
  let pivotIndex = start;
  for (let i = start + 1; i < end; i++) {
    if (arr[i] < pivot) {
      pivotIndex++;
      swap(arr, i, pivotIndex);
    }
  }
  swap(arr, start, pivotIndex);
  return pivotIndex;
}

// function to swap two elements in the array
function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function quickSort(arr, left = 0, right = arr.length) {
  if (left < right) {
    let pivotIndex = indexOfPivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([5, 7, 6, 1, 9, 12, 100, -3]));
