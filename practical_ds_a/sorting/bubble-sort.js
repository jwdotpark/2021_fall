const array = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 100000));

const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      // console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

// 22s
console.log(bubbleSort(array));

// slightly better optimized bubble sort
function bubbleSort(arr) {
  // remove unnecessary loop
  let noSwap = true;
  // loop over backwards 
  for (let i = 0; i < arr.length; i++) {
    // inner loop runs fewer times as outer loop runs through
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
      if (noSwap) {
        break;
      }
    }
  }
  return arr;
}