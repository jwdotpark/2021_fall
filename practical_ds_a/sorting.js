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

