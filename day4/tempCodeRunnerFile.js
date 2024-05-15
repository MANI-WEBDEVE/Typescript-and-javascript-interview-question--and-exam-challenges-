const sort = (arr) => {
  arr = arr.slice();

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      console.log(`the array: ${arr[j]} and new ${arr[j + 1]}`);
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        console.log(`other: ${temp}`);

        console.log(`otheroooooooooo ${(arr[j] = arr[j + 1])}`);
        arr[j] = arr[j + 1];
        console.log(`rivervvvvvvv:${(arr[j + 1] = temp)}`);
        // arr[j] = temp

        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(sort([1, 21, 22, 5, 0, -1]));
