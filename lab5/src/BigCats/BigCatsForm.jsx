import { useState } from "react";
import cats from "./BigCatsData";

function CatsForm(){

    const [catName,setCatName]=useState('');
    const [latinName,setLatinName]=useState('');
    const [currentCats,setCurrentCats]=useState(cats);

   //handles the submitResult
   const handleSubmit=(e)=>{
    e.preventDefault() //prevents refresh of page on submit
        
        console.log(e) //try e you'll notice e is an array containing password, username button in form etc
        // e.target[1].type='text';
   }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Cat Name: 
                    <input type='text' onChange={()=>{}} name='catName' value={catName}></input>
                </label>
                <br/>
                <label>Latin Name: 
                    <input type='text' onChange={()=>{}} name='latinName' value={latinName}></input>
                </label>
                <br/>
                <button>Submit</button>
                {/* <p>{submitResult}</p> */}
            </form>
        </div>
    )
}

export default CatsForm;