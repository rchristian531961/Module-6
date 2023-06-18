import cats from "./BigCatsData";
import { useState } from "react";
import MyCats from './MyCats'
import CatsForm from "./BigCatsForm";

function DisplayCats(){

    var [curCats,setCurCats]=useState(cats);

    var displayingData=(curCats)=>{
        return (
            <ul>
                {curCats.map(cat=>
        <MyCats 
        key={cat.id}
        name={cat.name}
        latinName={cat.latinName}
        image={cat.image}
        del={()=>removeCat(cat.id)}
        />)}
            </ul>
        )
    }

    var catsDisplay=curCats.map(cat=>
        <MyCats 
        key={cat.id}
        name={cat.name}
        latinName={cat.latinName}
        image={cat.image}
        del={()=>removeCat(cat.id)}
        />
    )

    var removeCat=(catRemoveId)=>{
        setCurCats(curCats.filter((cat)=>{
            if (catRemoveId!=cat.id){
                return cat
            }
        }))
    }

    //handler for reverse
    const handleReverseCats=()=>{
        const reverseCats=[...curCats];
        reverseCats.reverse()
        setCurCats(reverseCats);
    }

    //handler for sorting cats
    const handleSortingCats=()=>{
        var currentCats=[...curCats];
        currentCats=currentCats.sort((cat1,cat2)=>{
            return cat1.name>cat2.name ? 1:-2
        })
        setCurCats(currentCats)
    }

    //handler for displaying on Pantheria
    const handlePantheraCats=()=>{
        var currentCats=[...curCats];
        currentCats=currentCats.filter((cat)=>{
            if (cat.latinName.includes("Panthera"))
            return cat
        })
        console.log(currentCats);
        setCurCats(currentCats);
    }

    //handler for displaying Reset Cats
    const handleResetCats=()=>{
        var currentCats=[...cats];
        setCurCats(currentCats);
    }

    //handler for Cats Form
    

    const [catName,setCatName]=useState('');
    const [newLatinName,setNewLatinName]=useState('');

    const addNewCat=()=>{
        var updateCats=curCats;
        var newCat={id:curCats.length, name:catName, latinName:newLatinName};
        updateCats.push(newCat)
        setCurCats(updateCats)
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

    const handleCatName=(newCatName)=>{setCatName(newCatName)}
    const handleCatLatinName=(newCatLatinName)=>{setNewLatinName(newCatLatinName)}
   
    return(
        <div>
        {<CatsForm 
        handleSubmit={handleSubmit}
        handleName={handleCatName}
        handleCatLatin={handleCatLatinName}
        catName={catName}
        latinName={newLatinName}
        />}
       
        <button onClick={handleSortingCats}>Sort Cats</button>
        <button onClick={handleReverseCats}>Reverse Cats</button>
        <button onClick={handlePantheraCats}>Panthera Cats</button>
        <button onClick={handleResetCats}>Reset Cats</button>
        
        {displayingData(curCats)}
        {/* <ul>
            {catsDisplay}
        </ul>  */}
    
        </div>
    )
}

export default DisplayCats