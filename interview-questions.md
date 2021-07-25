# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: 'This' in JavaScript is used when trying to access properties inside of an object. With regular JS you would need to use "this.propertyname" to get access to something inside of an object. The same applies in React, but with react 'this' is used in more complex ways dealing with "states".

  Researched answer: This is a reference to an object for the current calling context. If this is being used in a method, it is referencing the object it belongs to. If this is being used in a regular function it would be referencing the global object. 
  However with functions, if it is called using the 'new' operator 'this' would reference a new empty object. 'This' has a lot of nuances and changes completely what it is referencing depending on where it is being used and it is important to pay attention to the current calling context.  


2. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: Yarn is a type of package manager. When yarn is run, node module files are added to the React application. Yarn adds functionality like being able to install other tools and to run the actual application using yarn start. It is an alternative to the npm package manager.

  Researched answer: Yarn is a newer package manager built by facebook, google, exponent, and tilda. It was created as a solution to some of the problems with the npm package manager by providing enhanced security, more stability, and being faster. Running yarn in a React application modifies and adds modules. 



3. What are props in React?

  Your answer: Props in React are a way to pass arguments in React. Props are pre-set parameters that the constructor and super will accept and we use props to change values in the state object. Props function similarly to how parameters and arguments work in functions.

  Researched answer: Props in React are used to enable components to accept arguments. Props are objects that contain the properties and the values that have been passed from the parent component. Props make components re-usable because through them we can make their output change, much like how functions that take parameters are more re-usable. For example if you wanted to pass information like a name from your main App component the code would look something like.
  <Greet name="Ben Affleck"/>
  Then inside the Greet component you would use this.props to reference that name to output with JSX. 
  <h1>Hello {this.props.name} </h1>



4. What is JSX?

  Your answer: JSX is the the lanaguage used in React. JSX is a mix of sorts of JavaScript and HTML. JSX syntax is similar but has a lot of specific nuanced differences to JavaScript. JSX is used in react to translate changes into the DOM. 

  Researched answer: JSX is an extension to the Javascript language syntax. JSX makes React code simpler and elegant/syntatic sugar and is not actually completely necessary. Ultimately JSX compiles into Javascript for the browser to understand; specifically it calls to React.createElement which is why the React library must always be in scope and we import React at the start of React applications. 



5. What is a DOM event?

  Your answer: A DOM/document object model event is when theres a qualifying change in the the application that will trigger a change in the DOM. Changes made in the application are sent to the virtual DOM which is then used to reference the actual DOM to compare and contrast and ultimately make any changes necessary to the DOM. 

  Researched answer: DOM events are events that occur because of a user action or a result of a change in the DOM tree. Some examples are clicking, uploading files, updating a text field, and submitting forms. Changes are registered by event listeners that wait for specific events to occur like using onClick will make the DOM listen for a click event on the node to perform an action. 



6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: Perhaps a function that isn't described?

  Researched answer: Anonymous functions are functions without a name, they can be used as arguments to another function or simply as an invoked function execution. 


## Looking Ahead: Terms for Next Week

1. Conditional rendering: Conditional rendering works the same as conditional statements and operators work in JS; if a conditional is met then that render happens in React. For example if the state of a user being logged in is true render this, if false render that. 

2. Ruby: Ruby is interpreted, high level, dynamic, general purpose programming language. 

3. Object oriented programming: OOP is programming that relies on the concept of classes and objects. When you use a class/blueprint thats re-used to create individual instances of objects thats object oriented programming. This is a concept we've been using a lot in class and moreso in React. React functions with components/classes inheriting from a main component and creating a tree with branches of components based of the main class with individual objects. 

4. Ruby hash: A hash maps each of its unique keys to a specific value. Hashes can be used to give names to objects, method arguments, and even to initialize an object.  

5. Ruby blocks: Ruby blocks are anonymous functions that can be passed into methods using do-end statements with either "{ }" or "| |".
