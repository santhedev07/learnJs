const person = {
    fullName : "Riski Dwianto",
    age : 20,   
    nationality : "Indonesian",
}

let personName = "fullName";
let agePerson = "age";
let nationalityPerson = "nationality";

delete person.age; // Deleting the age property
console.log(person[personName] + " is " + person[agePerson] + " years old.\t" + "His nationality is " + person[nationalityPerson] + ".");

// Object Methods
const student = {
    fullName: "Abdul Rahman",
    major: "Software Engineering",
    id: 35555,
    dataStudent: function(){
        return this.fullName + " is a student of " + this.major + " with ID " + this.id + ".";
    }
}
dataStudent = student.dataStudent();
console.log(dataStudent); // Output: Abdul Rahman is a student of Software Engineering with ID