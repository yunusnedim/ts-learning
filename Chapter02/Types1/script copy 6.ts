function printAll(arg: string | string[]) {
  if (typeof arg === "string") {
    console.log(arg);
  }
  // else if (typeof arg === 'string[]') {
  //   console.log (arg);
  // }
}

const s1 = "Jan";
printAll(s1);

const s2 = ["Jan", "Feb"];
printAll(s2);

// Generics

function firstElementOf<T>(arr: T[]) {
  return arr[0];
}

const arr1 = [5, 6, 7];
const arr2 = [true, false, false];

console.log(firstElementOf(arr1));
console.log(firstElementOf(arr2));

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output) {
  return arr.map(func);
}

const arr3 = [1, 2, 3, 4, 5];
const r1 = map(arr3, (n) => n * 2);
console.log(r1);

//Generic Constraints

interface isSized {
  length: number;
}

function lengthComparison<Type extends isSized>(a: Type[], b: Type[]) {
  return a.length >= b.length;
}

// const arr1 = User;
