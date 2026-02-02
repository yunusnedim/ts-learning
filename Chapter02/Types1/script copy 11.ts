interface User {
  name: string;
  id: number;
  age: number;
}

interface Admin {
  name: string;
}

function logUserProperty(user: User, key: keyof User) {
  console.log(user[key]);
}

const u1: User = { name: "Jan", id: 100, age: 27 };
logUserProperty(u1, "age");

function logProperty_v2<T extends User | Admin>(user: T, key: keyof T) {
  console.log(user[key]);
}

const u2: Admin = { name: "Admin1" };
const u3: User = { name: "Feb", id: 101, age: 28 };
logProperty_v2(u2, "name");
logProperty_v2(u3, "id");
