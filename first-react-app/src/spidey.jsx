function Spidey(props){
    // const spiderman={name:"spiderman", alterEgo:"Peter Parker", catchPhrase:"With great power comes great responsibility!"}
    
    const {superhero,countHere}=props;

    // console.log(anotherProp)
    
    return (
         <>
         <h3 style={{fontsize:countHere}}>{superhero.name}</h3>
        <blockquote>{superhero.catchPhrase}</blockquote>
        <cite>{superhero.alterEgo}</cite>
    </>
    )
}

export default Spidey;