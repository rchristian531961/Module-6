import {useState} from 'react'

function AddMovieForm({onAddMovie}){
    const [title,setTitle]=useState('');
    const [year,setYear]=useState('');
    const [synopsis, setSynopsis]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault()
        const data=new FormData(e.target)
        console.log({title,year,synopsis})
        onAddMovie({title,year,synopsis})
        
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Movie Title: 
                    <input name='title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>

                </label>
           

            
                <label>
                    Movie Year: 
                    <input name='year' value={year} onChange={(e)=>{setYear(e.target.value)}}/>

                </label>
           

            
                <label>
                    Movie Synopsis: 
                    <input name='synopsis' value={synopsis} onChange={(e)=>{setSynopsis(e.target.value)}}/>
                </label>

                <button>Add Movie</button>
            </form>
        </div>
    )
}

export default AddMovieForm