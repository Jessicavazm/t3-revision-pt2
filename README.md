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
