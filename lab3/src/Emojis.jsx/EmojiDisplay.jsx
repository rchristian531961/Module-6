import EmojiOptions from "./EmojisData"
import {useState} from 'react'

function EmojiDisplay(){
    const emojiOptions=EmojiOptions;

    var [currentEmoji, setCurrentEmoji]=useState(emojiOptions[0].emoji);
    console.log(currentEmoji)
    console.log(emojiOptions[1].emoji);

    const EmojisButtonChange=()=>{

       if(currentEmoji===emojiOptions[0].emoji){
        setCurrentEmoji(currentEmoji=emojiOptions[1].emoji)
       }
       else{
        setCurrentEmoji(currentEmoji=emojiOptions[0].emoji)
       }
    }

    return(
        <div>
        <h2>Emoji Change is Below</h2>
        <button onClick={()=>EmojisButtonChange()}>Click Here {currentEmoji}</button>
        {/* <button onClick={EmojisButtonChange}>Click Here</button> */}
        </div>
    )
}

export default EmojiDisplay;