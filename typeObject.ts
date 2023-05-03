let person : {
    name?: string;
    age: number
};

person = {
    name: "みのるん",
    age: 30
};

person.name = "たろう";
delete person.name;

console.log(
    person
);