# Module-6
Module 6

What is JSX?
Purpose is for front-end work. 

What is a component?
Is a small, reusable chunk of code tha is responsible for one job. Usually to render some HTML. 

Basics - Components:
We can pass JSX attributes and children to these components as a single object (named PROPS)

Components let us split the UI into independent reusable pieces, and think about each piece in isolation, with distinct logic and appearance. 
They accept arguments(props) and return JSX describing what should appear on the screen. Props as passed down from parent to child component. Each component should begin with CAPITAL LETTER to distinguish it from regular functions. 
We usually have a folder for components with each in their own file with matching uppercase name. Need to always export the component from file and import where it's needed. (export default --name--)

Props Example:
function Car(props){return html--------props.name---html}

const variable=<Car name="Names Value ">

Error Handling: 
in terminal 
npm i react-error-boundary