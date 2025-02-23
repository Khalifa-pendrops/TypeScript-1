interface User {
  type: "user";
  id: number;
  name: string;
  email: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: "admin";
  id: number;
  name: string;
  email: string;
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
    age: 27,
    occupation: "JavaScript Dev",
  },
  {
    type: "admin",
    id: 112,
    name: "Ogechi",
    email: "ogechi@yahoo.com",
    age: 23,
    role: "CEO",
  },
  {
    type: "user",
    id: 113,
    name: "Zayed",
    email: "zayed@hotmail.com",
    age: 43,
    occupation: "Python Dev",
  },
  {
    type: "admin",
    id: 121,
    name: "Faith",
    email: "faith@gmail.com",
    age: 27,
    role: "Sales Representative",
  },
  {
    type: "user",
    id: 122,
    name: "Hamed",
    email: "hamed@yahoo.com",
    age: 27,
    occupation: "JavaScript Dev",
  },
  {
    type: "admin",
    id: 123,
    name: "Kelvin",
    email: "kelvin@gmail.com",
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
console.log();

const userWithOccupationJavaScript = filteredData(persons, "user", {
  occupation: "JavaScript Dev",
});
console.log("Users with occupation: ");
userWithOccupationJavaScript.forEach(displayPerson);
console.log();

const adminWithRoleSales = filteredData(persons, "admin", {
  role: "Sales Representative",
});
console.log("Admins with role: ");
adminWithRoleSales.forEach(displayPerson);


