import {useState} from 'react'

const phrases=new Map([
    ['english', 'Happy Birthday'],
    ['german', 'Allese Gute zum Geburstag'],
    ['spanish', 'Feliz Cumpleanos'],
    ['pig latin', 'Appy ay irthday']
])

function BirthdayTranslator(){
    // const[currentLanguage,setCurrentLanguage]=useState('english');
    // const[phrase,setPhrase]=useState(phrases.get('english'));

    const[currentPhrase,setCurrentPhrase]=useState({
        lang:'english',
        phrase:'Happy Birthday'
    })

    //first version
    // const handleChangeLanguage=(lang)=>{
    //     setCurrentLanguage(lang);
    //     setPhrase(phrases.get(lang));
    // }

    const [settings, setSettings]=useState({
        darkMode:false,
        autoScroll:false,
        autoplay:false
    })

    const handleChangeSettings=(newSetting)=>{
        setSettings({
            ...settins,
            newSetting
        })
    }

    const handleChangeLanguage=(newLang)=>{
        setCurrentPhrase({
            lang:newLang,
            phrase:phrases.get(newLang)
        })
    }

    return (
        <div className="BirthdayTranslator componentBox">
            <h3>{currentPhrase.phrase}! ({currentPhrase.lang})</h3>
            <button onClick={()=>handleChangeLanguage('english')}>English</button>
            <button onClick={()=>handleChangeLanguage('german')}>German</button>
            <button onClick={()=>handleChangeLanguage('spanish')}>Spanish</button>
            <button onClick={()=>handleChangeLanguage('pig latin')}>Pig Latin</button>

            <button onClick={()=>handleChangeSettings({darkMode:true})}>Settings</button>
        </div>
    )
}

export default BirthdayTranslator