import {useState} from 'react'
import cats from "./BigCatsData"

function BigCatsSorting(){
    /*Need to make a function that sorts the data from alphabetical order 
    2 arrays: 1 original which only has the names and other to push tuples to by first
    */
    var currentCats=[...cats];
    console.log(currentCats);
    var catsSorted=[...cats].filter((a,b)=>{
        if(a.name>b.name){
            return a
        }
        if (a.name<b.name){
            return b
        }
        else{
            return a
        }
    })

    console.log(catsSorted);
    

    return(
        <div>
            
        </div>
    )
}

export default BigCatsSorting