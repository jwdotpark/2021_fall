function pivot(arr, start = 0, end = arr.length + 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  // first element as pivot
  const pivot = arr[start];
  let swapIdx = start;
  // loop while omit the first element
  for (let i = start + 1; i < arr.length; i++) {
    // compare pivot to current element
    if (pivot > arr[i]) {
      // move to next
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivotIdx = pivot(arr);
  // split the array into two sub arrays
  const left = arr.slice(0, pivotIdx);
  const right = arr.slice(pivotIdx + 1);

  return [...quickSort(left), arr[pivotIdx], ...quickSort(right)];
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    // call the pivot helper to get the pivot index and save it
    let pivotIndex = pivot(arr, left, right);
    // recursively call the quick sort on the sub arrays
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

const pivotRes = pivot([4, 8, 2, 1, 5, 7, 6, 3]);
const qsRes = quickSort([4, 8, 2, 1, 5, 7, 6, 3]);
console.log(pivotRes);
console.log(qsRes);

// 3
// [ 1, 2, 3, 4, 5, 6, 7, 8 ]


// 8
// 4         12
// 2   6   10      14
// 1  3 5 7 9  11  13  15