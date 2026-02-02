import { Point } from "./lib";
class User {
  name: string;
  id: number;
  constructor(name_: string, id_: number) {
    this.name = name_;
    this.id = id_;
  }
}

class Admin {
  name: string;

  constructor(name_: string, id_: number) {
    this.name = name_;
  }
}

function printInfo(arg: User | Admin) {
  if (arg instanceof User) {
    const user = arg as User;
    console.log(user.id);
    console.log(user.name);
  } else {
    console.log(arg.name);
  }
}

function printInfo_v2(arg: User | Admin) {
  if ("id " in arg) {
    const user = arg as User;
    console.log(user.id);
    console.log(user.name);
  }
}
