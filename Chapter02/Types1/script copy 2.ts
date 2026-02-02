let arr = [1, 2, 3];
let arr2: number[] = [4, 5];

function printArray(arg1: number[]) {
  console.log(arg1);
}

printArray([7, 8]);

function printTuple(arg1: [number, number]) {
  console.log(arg1);
  let item0 = arg1[0];
  let item1 = arg1[1];
  // let item2 = arg1[4];
}

printTuple([9, 10]);
