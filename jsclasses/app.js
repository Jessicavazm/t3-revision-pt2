// Create the class with the keyword 'class'
// Hash # makes variables private, read-only 
class Dog {
    // To initialise the class, you need the constructor method + this kw
    constructor(name, breed, age, color) {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.color = color;
        Dog.#numberOfDogs++;
    }

    // Static Variables && Functions
    static #numberOfDogs = 0;

    static resetDogCount(){
        Dog.#numberOfDogs = 0;
    }

    // set functions requires a parameter
    // This is the best practice but for the simplicity we will increase number in the class itself
    // static set NumberOfDogs(newValue) {
    //     return Dog.#numberOfDogs++;
    // }

    // To create a method, you don't need 'function' keyword
    // To access properties inside class, use 'this' keyword
    bark() {
        console.log(`Woof! Woof! I am ${this.name}`);
    }
}

// Creating an instance of the class Dog
let ollie = new Dog('ollie', 'German Shepherd', '3', 'Brown');

// console.log(ollie.bark());

// create unique BarkError class by inheriting from Error class
class BarkError extends Error {
    constructor(dogName, dogBreed){
        // super() is called to use the Error class's properties/methods
        super(`${dogName} of breed ${dogBreed} failed to bark.`);
    }
}

// let newError = new Error()
try {
    ollie.bark();
} catch (error) {
    // throw new BarkError(ollie.name, ollie.breed);
    if (BarkError){
        console.log("Bark error occurred.");
    }
}

// Now you can fetch the number when you call numberOfDogs
Dog.numberOfDogs = 10;

console.log(Dog.numberOfDogs);