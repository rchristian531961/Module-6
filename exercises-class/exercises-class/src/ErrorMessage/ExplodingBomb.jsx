import ErrorMessage from "./ErrorMessage";
function Bomb(){
    throw new Error('Big badda boom');

}

function ExplodingBomb(){
    const [exploded,setExploded]=useState(false);
    return (
        <div>
            <button onClick={()=>setExploded(!exploded)}>DANGER ZONE: CLICK HERE!</button>

            {exploded ? <Bomb/> : null}
        </div>
    )
}

export default ExplodingBomb;