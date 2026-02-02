type Addable = number | string;

function foo(arg1: Addable, arg2: Addable) {
  if (typeof arg1 === "number" && typeof arg2 === "number") {
    console.log("numbers");
  } else if (typeof arg1 === "string" && typeof arg2 === "string") {
    console.log("strings");
  } else {
    console.log("diff types");
  }
}

foo(1, 2);
foo("y", "n");
