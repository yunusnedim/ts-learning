const a1 = [1, 3, 5];
function arraySum(arr: number[]) {
  let result = 0;
  arr.forEach((item) => (result += item));
  return result;
}

function sum_v2(...numbers: number[]) {
  let result = 0;
  numbers.forEach((item) => (result += item));
  return result;
}
console.log(sum_v2(3, 5, 7, 9)); //takes any amount of args
