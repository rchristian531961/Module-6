import { useState } from "react";
import cats from "./BigCatsData";
import MyCats from "./MyCats";

function CatsForm(){

    const [catName,setCatName]=useState('');
    const [newLatinName,setNewLatinName]=useState('');
    const [currentCats,setCurrentCats]=useState(cats);

    //handles adding the new cat
    const addNewCat=()=>{
        var updateCats=currentCats;
        var newCat={id:currentCats.length, name:catName, latinName:newLatinName};
        updateCats.push(newCat);
        setCurrentCats(updateCats)
    }

   //handles the submitResult
   const handleSubmit=(e)=>{
    e.preventDefault() //prevents refresh of page on submit
    console.log(catName) 
    console.log(newLatinName)
    //try e you'll notice e is an array containing password, username button in form etc
    // e.target[1].type='text';
    addNewCat()
    console.log(cats)
   }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Cat Name: 
                    <input type='text' onChange={(e)=>{setCatName(e.target.value)}} name='catName' value={catName}></input>
                </label>
                <br/>
                <label>Latin Name: 
                    <input type='text' onChange={(e)=>{setNewLatinName(e.target.value)}} name='latinName' value={newLatinName}></input>
                </label>
                <br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CatsForm;