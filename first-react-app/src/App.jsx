import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Spidey from './spidey'
import Welcome from "./Components/Welcome"

function App() {
  const [count, setCount] = useState(0)

  //Error how to correct? One parent element
  // const invalidJSX=<p>p1</p><p>p2</p>

  // const invalidJSX=<div><p>p1</p><p>p2</p></div>

  const [count2,setCount2]=useState(100);

  const updateCount=()=>{
    setCount((count)=>{return count+=1})
    // setCount2((count2)=>{return count2+=10})
  }

  const spiderman={name:"spiderman", alterEgo:"Peter Parker", catchPhrase:"With great power comes great responsibility!"}

  const batman={name:"batman", alterEgo:"Bruce Wayne", catchPhrase:"I am the Night"}

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
        <button onClick={() => updateCount()}>
          count is {count}
        </button>
        
        <button onClick={()=>setCount2((count2)=>count2+=10)}>
          new count is {count2}
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Spidey countHere={count} superhero={spiderman}/>
      <Spidey countHere={count2} superhero={batman}/>

      <Welcome name="students">
        <p>Child element here!</p>
      </Welcome>
      
    </>
  )
}

export default App
