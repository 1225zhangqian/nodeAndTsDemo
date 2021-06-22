const arr = [1, 4, 5, 3, 2, 6, 7, 5, 7, 0, 3, 7];
// 冒泡排序（Bubble Sort）
const bubbleSort = arr => {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};
console.log(bubbleSort(arr));

// 插入排序 (Insertion Sort)
const insertionSort = arr => {
  let temp;
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
};
console.log(insertionSort(arr));

// 希尔排序（Shell Sort）
const shellSort = arr => {
  var len = arr.length,
    temp,
    gap = 1;
  while (gap < len / 3) {
    //动态定义间隔序列
    gap = gap * 3 + 1;
  }
  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    for (var i = gap; i < len; i++) {
      temp = arr[i];
      for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
  }
  return arr;
};
console.log(shellSort(arr));

// 选择排序（Selection Sort）
const selectionSort = arr => {
  let minIndex, temp;
  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
};
console.log(selectionSort(arr));
const arr = [1, 4, 5, 3, 2, 6, 7, 5, 7, 0, 3, 7];
// 快速排序（Quick Sort）
const quickSort = arr => {};
// 归并排序（Merge Sort）
// 堆排序（Heap Sort）
// 计数排序（Counting Sort）
// 桶排序（Bucket Sort）
// 基数排序（Radix Sort）
