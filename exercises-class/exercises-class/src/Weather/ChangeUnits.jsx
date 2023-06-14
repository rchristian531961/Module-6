
function ChangeUnits(props){

    const changeUnit=(newUnit)=>{
        props.handleUnitsChange(newUnit);
    }

    return(
        <>
        <button onClick={()=>changeUnit('F')}>Farenheight</button>
        <button onClick={()=>changeUnit('C')}>Celcius</button>
        </>
    )
}

export default ChangeUnits;