function greeter(person) {
    return "Hello, " + person;
}
var user = "Alex User";
document.body.textContent = greeter(user);
function greeter2(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user2 = {
    firstName: "Alexander",
    lastName: "Muriithi"
};
document.body.textContent += greeter2(user2);
// 
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + ". " + lastName;
    }
    return Student;
}());
function greeter3(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user3 = new Student("Alejandro", "W", "Muriithi");
document.body.textContent += greeter3(user3);
