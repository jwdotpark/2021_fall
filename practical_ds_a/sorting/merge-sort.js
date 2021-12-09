const array = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 100000));

// const swap = (arr, index1, index2) => {
//   [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
// }

function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr1.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

// function mergeSort(arr) {
//   if (arr.length === 1) {
//     return arr;
//   }
//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// }

// implement merge sort
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort(array));