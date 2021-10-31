array = Array.from({length: 100000}, () => Math.floor(Math.random() * 100000));

const swap = (arr, index1, index2) =>{
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

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

// console.log("Bubble Sort:" + bubbleSort(array));             // 22s
// console.log("Selection Sort:" + selectionSort(array));       // 6s
console.log("Insertion Sort:" + insertionSort(array));       // 3s

