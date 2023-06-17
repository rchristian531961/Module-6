function MyCats(props){
    const {name,latinName,image,del}=props;

    return (
        <li>
            <p>{name}</p>
            <p>{latinName}</p> 
            <img src={image} alt="Some Image"></img>
            <button onClick={del}>Delete</button>
        </li>
        
    )
}

export default MyCats;