enum permissionLevel {
  Instructor,
  Student,
  Admin,
}

type Person = {
  fullName: string;
  age: number;
};

type BadgeOwner = {
  badgeID: string;
};

type Employee = Person & BadgeOwner;

interface UserExtended extends Person {
  level: permissionLevel;

  courses: string[];
}

const Mahmud: UserExtended = {
  fullName: "Mahmud",
  age: 30,
  courses: ["none"],
  level: permissionLevel.Admin,
};

const Yunus: Employee = {
  fullName: "yunus",
  age: 36,
  badgeID: "123456",
};
console.log(Yunus);
