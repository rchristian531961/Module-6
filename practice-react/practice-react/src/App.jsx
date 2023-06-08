import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

{/*What is a component task pg:19
   This function creates a new component as a function tha returns some JSX
    */}
function ExampleComponent(){
  return(
    <div className="ExampleComponent componentBox">
      <h1>My Example Component</h1>
      <p>My first React component</p>
    </div>
  )
}

function Welcome(props){
  return(
    <div>
      {/*If 'name' prop exists, render it on the screen */}
      <h3>Welcome {props.name}</h3>
    </div>
  )
}

function City({name, state='NSW', country='Australia', children}){
  //destructuring the props.children property as well
  //Notice the 4 parameter (children) the entire (HTML) is treated as the parameter children value
  return(
    <div>
      <strong>{name}</strong> is in {state}, {country} {children}
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  {/*Notice how to write comments in JSX.
     Notice how the conversion between javascript and html is used with {For Javascript} (For HTML) */}
  
  {/*Used the below to testing at beginner level */}
  const spiderman={name:'Spiderman', alterEgo:'Peter Parker', catchPhrase:'With great power comes great responsibility'}
  const batman={name:"Batman", alterEgo:"Bruce Wayne", catchPhrase:"I am the night. I am BATMAN"}

  const spideyJSX=(
    <div>
      <h3>{spiderman.name}</h3>
      <blockquote>{spiderman.catchPhrase}</blockquote>
      <cite>{spiderman.alterEgo}</cite>
    </div>
  )

  const batmanJSX=(
    <div>
      <h3>{batman.name}</h3>
      <blockquote>{batman.catchPhrase}</blockquote>
      <cite>{batman.alterEgo}</cite>
    </div>
  )

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/*Below testing importing the javascript. Just use the variables */}
      {spideyJSX}
      {batmanJSX}

      {/*Example of how function(COMPONENT) incorporates in JSX use <functionName/> */}
      <ExampleComponent/>

      {/*Used Props example here. My css example here*/}
      <Welcome className='component' name="Ray"/>

      {/*Everything in between <City></City> is passed as props.children */}
      <City name="Newcastle">
        <div> Newcastle is a harbour city in the Australian state of new South Wales</div>
        <div><strong>Population:</strong>322,278 (2016)</div>
      </City>
    </>
  )
}

export default App
