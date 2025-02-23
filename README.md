# TypeScript Filter Function using Generic and Conditional types

---

## Description

This program is a list of people, where each person can be either a **User** or an **Admin**. A User is someone who has a job, and an Admin is someone who has a role, among other properties they both share. The program could filter and display these people based on certain **criteria**, like their age, email, etc. The function strictly returns User[] for "user" and Admin[] for "admin". It also prevents filtering by type. The criteria (age) also dynamically adjust based on the person type.

___

## The filteredData function

This function filters the array of persons to find specific persons from the list. It takes in **persons** (list of all people both Users and Admins), **personType** (whether Users or Admins) and **criteria** (conditions or rules applied) as arguments. This function first filters the list for specific identified people (Users or Admins) and then checks each person against the criteria specified. A new list of filtered people is returned via the **displayPerson** function that logs details of each person to the console. Below is a code example of the output of this function when the criteria is either **{age: 27}**, **{occupation: JavaScript Dev}** or **{role: Sales Representative}**.

```TypeScript

Users of age 27:
111, Khalifa, 27, khalifa@gmail.com, JavaScript Dev
122, Hamed, 27, hamed@yahoo.com, JavaScript Dev

Admins of age 27:
121, Faith, 27, faith@gmail.com, Sales Representative

Users with occupation: 
111, Khalifa, 27, khalifa@gmail.com, JavaScript Dev
122, Hamed, 27, hamed@yahoo.com, JavaScript Dev

Admins with role:
121, Faith, 27, faith@gmail.com, Sales Representative

```
Different criterium could be combined to achieve a desired result. Look at this code example

 `const desiredOutput = filteredData(persons, "user", { age: 27, occupation: "JavaScript Dev });`

When logged to the console, this should return a list of persons (Users[]) aged 27 whose occupation is JavaScript Dev.

---

## How to Use

- fork the repository
- navigate to the file directory **person.ts**
- enter the command below to compile .ts to .js

`tsc`

- followed by the command below to run the code

`node person.js`

---



