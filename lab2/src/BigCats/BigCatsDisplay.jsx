import cats from "./BigCatsData";

function MyCats({id,name, latinName}){
    return (
        <li key={id}>
            <p>{name}</p>
            <p>{latinName}</p> 
            <img src="" alt="Some Image"></img>
        </li>
    )
}

function DisplayCats(){

    let currentCats=cats;
    console.log(currentCats);
    const catsDisplay=currentCats.map(cat=>
        MyCats(cat)
        )

    return(
        <div>
        <ul>
            {catsDisplay}
        </ul>
        </div>
    )
}

export default DisplayCats