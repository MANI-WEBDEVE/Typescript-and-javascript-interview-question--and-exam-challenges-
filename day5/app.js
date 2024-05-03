//
//? Write a function to check ka triangle type
//? Traingle is three type [equilateral, isosceles, scalene]

const checkTraingle = (a, b, c) => {
  if (a === b && b === c) {
    return "Equilateral Traigle";
  } else if (a === b || b === c || a === c) {
    return "Isosceles Trangle";
  } else {
    return "Scalene Traingle";
  }
};

console.log(checkTraingle(2, 4, 1));
