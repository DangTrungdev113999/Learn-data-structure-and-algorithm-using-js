// Nổi phần tử nhỏ nhất lên trước.
let bubbleSort1 = (arr, n) => {
  for (let i = 0; i < n - 1; i++) {
    for (let j = n - 1; j > i; j--) {
        if (arr[j] < arr[j - 1]) {
          temp = arr[j] ;
          arr[j]  =  arr[j - 1];
          arr[j - 1] = temp;
        }
    }
  }

  return arr;
}

// Nổi phần tử lớn nhất lên trước 
let bubbleSort2 = (arr, n) => {
  let temp;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 2 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let arr = [3,1,2,4,6];
let length = arr.length;

console.log(bubbleSort2(arr, length));