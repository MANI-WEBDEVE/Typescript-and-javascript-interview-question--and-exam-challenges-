const sort = (arr) => {
  arr = arr.slice();

  for (let i = 0; i < arr.length - 1; i++) {
    console.log(`first array loop: ${arr[i]}`);

    for (let j = 0; j < arr.length - 1 - i; j++) {
      console.log(`second array loop: ${arr[j]}`);

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // console.log(temp);
      }
    }
  }
};

console.log(sort([2, 3, 1]));
