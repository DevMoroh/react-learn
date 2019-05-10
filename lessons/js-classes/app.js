
class Human {
    gender = 'Y';

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = 'my name';

    printName = () => {
        console.log(this.name);
        return this.name;
    }
}

const person = new Person();
person.printName();
person.printGender();