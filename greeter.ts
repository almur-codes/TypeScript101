function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Alex User";

document.body.textContent = greeter(user);

// 

interface Peraon {
    firstName: string,
    lastName: string
}

function greeter2(person: Peraon){
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user2 = {
    firstName: "Alexander", 
    lastName: "Muriithi"
};

document.body.textContent += greeter2(user2);

// 

class Student {
    fullName: string;

    constructor(public firstName: string, middleInitial: string, public lastName: string){
        this.fullName = firstName + " " + middleInitial + ". " + lastName;
    }
}

interface Person2 {
    firstName: string,
    lastName: string
}

function greeter3(person: Person2) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user3 = new Student("Alejandro", "W", "Muriithi");

document.body.textContent += greeter3(user3);