"use strict";
const persons = [
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
const displayPerson = (person) => {
    console.log(`${person.id}, ${person.name}, ${person.age}, ${person.email}, ${person.type === "user"
        ? person.occupation
        : person.role}`);
};
const filteredData = (persons, personType, criteria) => {
    return persons
        .filter((person) => person.type === personType)
        .filter((person) => {
        const criteriaKeys = Object.keys(criteria);
        return criteriaKeys.every((fieldName) => {
            const value = person[fieldName];
            const criteriaValue = criteria[fieldName];
            return criteriaValue === undefined || value === criteriaValue;
        });
    });
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
