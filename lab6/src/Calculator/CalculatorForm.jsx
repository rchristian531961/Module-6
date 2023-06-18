import { useState } from "react";
import Calculate from "./Calculations";

function CalculatorForm(){

    const [num1,setNum1]=useState('')
    const [num2,setNum2]=useState('')
    const [operation,setOperation]=useState('+')
    const [solution,setSolution]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (num2=="0" && operation=="/"){
            setSolution("Undefined")
        }
        else if (/^[a-zA-Z]+$/.test(num1)){
            setSolution("Incorrect Entry for num1")
        }
        else if (/^[a-zA-Z]+$/.test(num2)){
            setSolution("Incorrect Entry for num2")
        }
        else{
            setSolution(Calculate(num1,num2,operation))
        }
        //Verify Solution
        console.log(num1)
        console.log(num2)
        console.log(operation);
        // console.log(/^[a-zA-Z]+$/.test("Hel2lo"));
        console.log(Calculate(num1,num2,operation))
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Number1: 
                    <input type='text' onChange={(e)=>{setNum1(e.target.value)}} name='num1' value={num1}></input>
                </label>
                <br/>
                <label>Number2: 
                    <input type='text' onChange={(e)=>{setNum2(e.target.value)}} name='num2' value={num2}></input>
                </label>
                <br/>
                <label>Operation:</label>
                <select value={operation} onChange={(e)=>{setOperation(e.target.value)}}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <button>Submit</button>
                <h2>{solution}</h2>
            </form>
        </div>
    )
}

export default CalculatorForm