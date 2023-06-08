/*Create a Greeting Component in its own file which renders the text 'hello world'
  Import it into App.jsx and pass in a prop called 'name' when rendering the Greeting component
  If name prop exists, make sure the greeting component replaces 'world' with that name value i.e Hello John
  Include support for a greeting message via children
*/

function Greeting(props) {
  return (
    <div>
    {/*Established the replacement word using components and JSX */}
      <h3>Hello {props.name ? props.name: "World"}</h3>

      {/*Children special property using the html info in call as children elements display */} 
      {props.children}
    </div>
  );
}

export default Greeting;