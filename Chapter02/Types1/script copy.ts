function add(arg1: number, arg2: number) {
  return arg1 + arg2;
}

function concat(arg1: string, arg2: string) {
  return arg1 + arg2;
}

const a1 = 2;
const a2 = 3;
const r1 = add(a1, a2);

console.log(r1);
console.log(typeof r1);

console.log(concat("Hello", " World!"));
