# Term 3 Revision Week 5 - 10


## Week 5 - React

## React JS
Front end Web Framework. It's a tool used to build websites, the pages that you see in the browser. React was created and maintained by Face(now Meta). 

- React is based on components, which are reusable pieces of code that define how specific parts of a UI should look and behave. 
- Unidirectional Data Flow: Data flows in a single direction, making debugging and application structure easier.
- Each component is a function or class that returns a piece of UI (usually written in JSX). 
- JSX is a syntax extension that lets you write HTML-like code inside JavaScript.
- Naming Rules: 
    - All the characters in the package name should be in lowercase, no uppercase or mixed cases names are allowed.
    - Package name should not start with . or _
    - Package name should not be the same as node.js core module.


## Class Components
- Were the original way to create components in React.
- Use ES6 classes and lifecycle methods (e.g., componentDidMount, componentDidUpdate).
- Manage state and props within the class.

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
