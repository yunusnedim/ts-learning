const obj = {
  fullname: "namito",
  age: 36,
  courses: ["Typescript", "Management"],
};

// console.log(obj);

function printUser(user: { fullname: string; age: number }) {
  console.log(user.fullname);
}

function foo(arg1: any) {
  if (arg1) {
    console.log(arg1);
  } else {
    console.log("undefined");
  }
}

foo(0);
let a: number | undefined = undefined;
foo(a);
a = 31;
foo(a);
