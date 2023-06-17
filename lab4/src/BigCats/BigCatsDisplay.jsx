import cats from "./BigCatsData";
import { useState } from "react";
import MyCats from './MyCats'

function DisplayCats(){

    var [curCats,setCurCats]=useState(cats);

    const catsDisplay=curCats.map(cat=>
        <MyCats 
        key={cat.id}
        name={cat.name}
        latinName={cat.latinName}
        image={cat.image}
        />
    )

    
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

    return(
        <div>
        <ul>
            {catsDisplay}
        </ul>
        <button onClick={handleSortingCats}>Sort Cats</button>
        <button onClick={handleReverseCats}>Reverse Cats</button>
        <button onClick={handlePantheraCats}>Panthera Cats</button>
        <button onClick={handleResetCats}>Reset Cats</button>
        </div>
    )
}

export default DisplayCats