// const s = "23.6";
// // let n: number = s;
// const n: number = Number(s);
// const n2: number = parseInt(s);
// const n3: number = parseFloat(s);

// console.log(n, n2, n3);
// console.log(Math.round(n3));


// const arr = [1, 12, 3, 24, 5, 112];
// const arr2 = arr.map((n) => n * 2);

// const arr3 = arr.filter((n) => n % 2 !== 0);
// // console.log(arr3);

// const arr_sorted = arr.sort((a, b) => b - a );
// // const arr_sorted = arr.sort();
// console.log(arr_sorted);
// console.log(arr_sorted.length);


const person: { name: string; age: number | undefined; isAdmin?: boolean } = {
  name: "name",
  age: 34,
}

console.log(person.isAdmin);
