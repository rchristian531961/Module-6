function MyCats(props){
    const {name,latinName,image}=props;
    return (
        <li>
            <p>{name}</p>
            <p>{latinName}</p> 
            <img src={image} alt="Some Image"></img>
        </li>
    )
}

export default MyCats;