interface User {
  type: "user";
  id: number;
  name: string;
  email: string;
  password: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: "admin";
  id: number;
  name: string;
  email: string;
  password: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
  {
    type: "user",
    id: 111,
    name: "Khalifa",
    email: "khalifa@gmail.com",
    password: "password",
    age: 27,
    occupation: "JavaScript Dev",
  },
  {
    type: "admin",
    id: 211,
    name: "Ogechi",
    email: "ogechi@yahoo.com",
    password: "password",
    age: 23,
    role: "Front Desk Officer",
  },
  {
    type: "user",
    id: 121,
    name: "Zayed",
    email: "zayed@hotmail.com",
    password: "password",
    age: 43,
    occupation: "Python Dev",
  },
  {
    type: "admin",
    id: 221,
    name: "Faith",
    email: "faith@gmail.com",
    password: "password",
    age: 27,
    role: "Sales Representative",
  },
  {
    type: "user",
    id: 123,
    name: "Hamed",
    email: "hamed@yahoo.com",
    password: "password",
    age: 27,
    occupation: "Typescript Dev",
  },
  {
    type: "admin",
    id: 223,
    name: "Kelvin",
    email: "kelvin@gmail.com",
    password: "password",
    age: 30,
    role: "CEO",
  },
];

const displayPerson = (person: Person): void => {
  console.log(
    `${person.id}, ${person.name}, ${person.age}, ${person.email}, ${
      person.type === "user"
        ? (person as User).occupation
        : (person as Admin).role
    }`
  );
};

const filteredData = <T extends "user" | "admin">(
  persons: Person[],
  personType: T,
  criteria: T extends "user"
    ? Partial<Omit<User, "type">>
    : Partial<Omit<Admin, "type">>
): T extends "user" ? User[] : Admin[] => {
  return persons
    .filter(
      (person): person is T extends "user" ? User : Admin =>
        person.type === personType
    )
    .filter((person) => {
      const criteriaKeys = Object.keys(criteria) as (keyof typeof criteria)[];
      return criteriaKeys.every((fieldName) => {
        const value = person[fieldName as keyof Person];
        const criteriaValue = criteria[fieldName as keyof typeof criteria];
        return criteriaValue === undefined || value === criteriaValue;
      });
    }) as any;
};

const usersOfAge27 = filteredData(persons, "user", { age: 27 });
console.log("Users of age 27:");
usersOfAge27.forEach(displayPerson);
console.log();

const adminsOfAge27 = filteredData(persons, "admin", { age: 27 });
console.log("Admins of age 27:");
adminsOfAge27.forEach(displayPerson);

// const userWithId123 = filteredData(persons, "user", { id: 123 });
// console.log("User with ID 123:");
// userWithId123.forEach(displayPerson);
// console.log();

// const adminWithId223 = filteredData(persons, "admin", { id: 223 });
// console.log("Admin with ID 223:");
// adminWithId223.forEach(displayPerson);

// const userWithEmailgmail = filteredData(persons, "user", { email: "@gmail" });
// console.log("User with email: ");
// userWithEmailgmail.forEach(displayPerson);
// console.log();

// const adminWithEmailgmail = filteredData(persons, "admin", { email: "@gmail" });
// console.log("Admin with email: ");
// adminWithEmailgmail.forEach(displayPerson);

// const userWithOccupationTypeScript = filteredData(persons, "user", {
//   occupation: "Typescript Dev",
// });
// console.log("User with occupation: ");
// userWithOccupationTypeScript.forEach(displayPerson);

// const adminWithRoleSales = filteredData(persons, "admin", {
//   role: "Sales Representative",
// });
// console.log("Admin with role: ");
// adminWithRoleSales.forEach(displayPerson);
