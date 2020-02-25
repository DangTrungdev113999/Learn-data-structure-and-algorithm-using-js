function swap(items, firstIndex, secondIndex) {
  let temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function partition(items, left, right) {
  console.log(items);
  console.log(left, right);
  let pivot = items[Math.floor((right + left) / 2)],
    i = left,
    j = right;

  console.log(pivot);
  console.log(i, j);
  while (i <= j) {
    console.log(i, j);
    while (items[i] < pivot) {
      console.log(pivot);
      console.log(i);
      console.log(items[i]);
      console.log(pivot);
      i++;
    }

    while (items[j] > pivot) {
      console.log(pivot);
      console.log(j);
      console.log(items[j]);
      j--;
    }

    if (i <= j) {
      console.log(i, j);
      swap(items, i, j);
      i++;
      j--;
    }
  }

  console.log(i, j);

  return i;
}

function quickSort(items, left, right) {
  console.log(items);
  let index;

  if (items.length > 1) {
    index = partition(items, left, right);
    console.log(index);
    console.log(left, right);

    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }

    if (index < right) {
      quickSort(items, index, right);
    }
  }

  return items;
}

let items = [4, 2, 6, 5, 3, 9];
// first call
let result = quickSort(items, 0, items.length - 1);

result;
