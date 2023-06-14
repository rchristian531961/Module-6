import { useState } from "react";
// save in MoodChanger.jsx
function MoodChanger() {
//  const [mood, setMood] = useState('happy');
const [mood, setMood] = useState('\u2728');

 // Calls setMood with a conditional state value
 const handleRunningLate = () => {
    let newMood = 'stressed';
    if (mood === 'stressed') newMood = 'really stressed'
    else if (mood === 'really stressed') newMood = 'giving up';
    setMood(newMood)
}

const consoleStuff=()=>{
    console.log('Delay:', mood)
}

const handleWinLotto=(()=>{
    setMood('ecstatic')
    //Notice the it prints previous due to asynchronous. Thus, it's not processing update immediately 
    // console.log(mood)

    //Thus need a delay is needed
    setTimeout(consoleStuff,1500)
    console.log('No delay',mood);
    
})
   

 return (
 <div className="MoodChanger componentBox">
 Current Mood: {mood} 
 <br></br>
 <button onClick={()=>{setMood('tired')}}>Stay Up Late</button>
 <button onClick={()=>{setMood('hungry')}}>Skip Lunch</button>
 <button onClick={()=>{setMood('impatient')}}>Slow computer</button>
 <button onClick={handleRunningLate}>Running Late</button>
 <button onClick={handleWinLotto}>Win Lotto</button>
 </div>
 )
}
export default MoodChanger;