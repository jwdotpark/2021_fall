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

const res = pivot([4, 8, 2, 1, 5, 7, 6, 3]);
console.log(res);
// > 3