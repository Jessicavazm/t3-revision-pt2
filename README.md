# Term 3 Revision Week 5 - 7


## Week 5 - React

## React JS
Front end Web Framework. It's a tool used to build websites, the pages that you see in the browser. React was created and maintained by Face(now Meta). 

Website to see https://babeljs.io

- React is based on components, which are reusable pieces of code that define how specific parts of a UI should look and behave. 
- Unidirectional Data Flow: Data flows in a single direction, making debugging and application structure easier.
- Each component is a function or class that returns a piece of UI (usually written in JSX). 
- Components can have subcomponents. An example of this would be a post has comments, comments would the subcomponent of the post component.
- Ensure each component is uniquely identified using map method (index) and key concept.
- < /> this denotes a component.
- JSX is a syntax extension that lets you write HTML-like code inside JavaScript.
- JSX always needs to return one HTML component, usually a <div>.
- In JSX Components, you should define the class using className='' instead of class='' for Styling purposes.
- You need to use {} in order to write JS inside HTML elements.
- NPX (Node Package Executor): Used to execute Node.js packages directly from the terminal without globally installing them.
- Package Naming Rules: 
    - All the characters in the package name should be in lowercase, no uppercase or mixed cases names are allowed.
    - Package name should not start with . or _
    - Package name should not be the same as node.js core module.


## Class Components
- Were the original way to create components in React.
- Use ES6 classes and lifecycle methods (e.g., componentDidMount, componentDidUpdate).
- Manage state and props within the class.
- State Management:	this.state & setState.

### Syntax: 
    import React, { Component } from 'react';

    class Welcome extends Component {
        render() {
            return <h1>Hello, {this.props.name}!</h1>;
        }
    }


## Function Components
- Initially used for stateless components, but now can handle state and lifecycle with hooks.
- Simpler and cleaner compared to class components.
- Use the useState, useEffect, and other hooks for managing state and side effects.

### Syntax: 
    import React, { useState } from 'react';

    function Welcome({ name }) {
        const [greeting, setGreeting] = useState('Hello');

        return (
            <div>
                <h1>{greeting}, {name}!</h1>
                <button onClick={() => setGreeting('Hi')}>Change Greeting</button>
            </div>
        );
    }


## How to create a new React project
- Use NPX (Node Package Executor)
- Using CRA: CRA (Create React App) is a command-line tool provided by the React team to quickly set up a new React project with a ready-to-use development environment.
- npm start: Starts the development server
- npm run build: Bundles the app into static files for production.
- npm test: Starts the test runner.
- npm run eject: Removes this toll and copies build dependencies, conf files and scripts into the app directory (final step in the application).

### Syntax to create app:
    npx create-react-app name_of_react_project
    npx create-react-app .    // This takes the name of the directory itself


## React Folders Structure
Make sure when you create these subfolders, you handle the import of these files properly.

- src
    - Assets: static files such as logo, visual components.
    - Components: Reusable components that can be shared across different instances. Create one file for each component. In this course we will revise Functional and Classes Components. Camel-case is preferred for Components.
    - Functions: Any specific type of functionalities you want to globalize and use in other files.
    - Pages: This folder will contain app.js files. In JS, it's a good practise to change the App.js to App.jsx to ensure more compatibility with React.
    - Stylesheets: For CSS files.
    - Index.js will be left outside the subfolders.


## Props - Property
It's a built in keyword. It's work as a parameter or function. 

- A way to pass data from a parent component to a child component.
- Immutable (cannot be changed by the child component receiving them).
- The main method for customizing components and making them reusable.
- You pass props multiple times.
- When you return props, it needs to be in key- value pairs.

    function Welcome(props) {
        return <h1>Hello, {props.name}!</h1>;
    }

    function App() {
        return <Welcome name="Luke" />;
    }


## Bootstrap
Bootstrap is a popular front-end framework used to quickly design and build responsive, mobile-first websites. It provides a collection of pre-designed CSS styles, components, and JavaScript utilities, making web development faster and easier.

- @material-ui/system
- react-bootstrap
- react-daisyui


## Classes components
Classes were introduced in ES6 as a cleaner and more readable way to create objects and manage inheritance. They're essentially syntactic sugar over JavaScript's prototype-based inheritance.

- Classes require a render() method because it is a core part of how class components function. The render() method is responsible for returning the JSX that defines what should be displayed in the DOM.
- When trying to access a variable or function within the function itself, you need to use the 'this' keyword.

### Defining a class:
- Created using the 'class' keyword.
- Name in conventional: Camel case + first letter in Capital

        class Car {
        constructor(model) {
            this.model = model;
        }

        drive() {
            console.log(`${this.model} is driving!`);
        }
        }


### Methods:
- Constructor: A special method called when an instance of the class is created.
- Methods: defined inside a class are automatically added to the object's prototype.

### Inheritance:
- Classes can inherit from other classes using extends.
- The super() method is used to call the constructor of the parent class(this is an essential step).

        class SportsCar extends Car {
        constructor(model, maxSpeed) {
            super(model);
            this.maxSpeed = maxSpeed;
        }

        showSpeed() {
            console.log(`${this.model} can reach ${this.maxSpeed} km/h!`);
        }
        }


### Properties:
- Properties can be defined inside the constructor or using class fields (public or private).
- Private properties start with # and are only accessible within the class.

### Instantiation:
- Objects are created using the new keyword.

        const myCar = new Car('Toyota');
        myCar.drive(); // Toyota is driving!


## Static Variables
Static variables in JavaScript are properties or methods associated with a class itself, rather than with instances of the class. These are defined using the static keyword and can only be accessed directly from the class, not from an instance.

- Static variables belong to the class, not to any instance created from the class.
- They are shared across all instances of the class (if the instances interact with them via the class).
- Static properties or methods are used for functionality or data that is not tied to any specific instance but relevant to the class as a whole.
- Static variables or methods are not accessible through instances of the class
- Declared inside a class using the 'static' keyword.


## Class State
In JavaScript, particularly in React class components, state refers to an object that holds dynamic data or information that influences the rendering of a component. Unlike props, which are read-only and passed to a component, state is mutable and managed internally by the component. States stores objects.

- State is managed within the class component and cannot be directly accessed or modified by other components.
- When state changes, the component automatically re-renders to reflect the new data.
- Don't update the state directly.
- Pass 'props' to the base class: If a class extends another class, and you need to access or pass props, you must use constructor() and call super(props).
- this.state
    - initialize state in the constructor of the class component.
    - used to store information, data.
    - used to access current state.
- this.setState()
    - Update the state.
- When checking condition inside of render block, you can use the Ternary Operator or have the condition inside of a function and call that function inside of the render method.

### Constructor() Method:
- The constructor() method is used to initialize an object’s properties and set up its initial state.
- Constructor() method can also be used to bind event handlers or methods.


### Super() Method:
- The super method is required in a class constructor when the class extends another class. It ensures the parent class is properly initialized.

When You Don’t Need Constructor or Super:
- No State or Initialization: If your class component doesn’t need state or custom initialization, you can omit the constructor.


## Classes Lifecycle methods
- Mounting/ Initialisation: These methods are called in the following order when an instance of a component is created and inserted into the DOM: 
    - constructor()
    - render()
    - componentDidMount() 

- Updating: An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:
    - render()
    - componentDidUpdate()

- Unmounting/ Finalisation: This method is called when a component is being removed from the DOM.
    - componentWillUnmount()

- Error handling: These methods are called when there's an error during rendering, in a lifecycle method, or in the constructor of any child component.
    - componentDidCatch()


### Spread Operator ...
The spread operator is used to "spread out" the elements of an array, object, or string into a new array, object, or function call.

    const numbers = [1, 2, 3];
    const moreNumbers = [...numbers, 4, 5];
    console.log(moreNumbers); // Output: [1, 2, 3, 4, 5]


### Events
- On click only allows event function to be executed. If you need more than one function to be executed, you can use an arrow function and calls both functions inside of it.