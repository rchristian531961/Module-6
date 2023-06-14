import {useState} from 'react'
import Movie from './Movies';
import AddMovieForm from './AddMovieForm';

const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      year: 1994,
      synopsis: "Two imprisoned men find redemption.",
    },
    {
      id: 2,
      title: "The Dark Knight",
      year: 2008,
      synopsis: "Batman fights the menace known as the Joker.",
    },
    {
      id: 3,
      title: "Interstellar",
      year: 2014,
      synopsis: "Explorers travel through a wormhole in space.",
    },
  ];

function MoviesList() {

    const [currentMovies,setCurrentMovies]=useState(movies)
  
  const movieItems = currentMovies.map(movie => (
    // <li key={movie.id}>{movie.title}</li>
    //Changed to a component Movie
    <Movie
      key={movie.id}
      title={movie.title}
      year={movie.year}
      synopsis={movie.synopsis}
    />
  ));

  const handleReverseMovies=()=>{

    //first
    let newMovies=[...currentMovies]//clones elements from current movies
    //second
    newMovies.reverse();
    //last
    setCurrentMovies(newMovies);
  }

  //original testing to add movies
//   const handleAddMovie=()=>{
//     let newMovies=[...currentMovies,{id:currentMovies.length+1,title:"The Whale",year:2022,synopsis:"A morbid obese teacher attempts to reconnect with his dad"}]

//     setCurrentMovies(newMovies)
//   }

const tempMovie={
    id:4,
    title:"Hello",
    year:2022,
    synopsis:"Nope Nope"
}
const handleAddMovie=(newMovieToAdd)=>{
    let newMovie={
      ...newMovieToAdd, id:currentMovies.length+1
    }
    let newMovies=[...currentMovies,newMovieToAdd]
    setCurrentMovies(newMovies)
}

const handleUpdateSynopsis=(updateSynopsis)=>{

    let newMovies=currentMovies.map(movie => 
        movie.id===1 
        ? 
        {...movie, synopsis:updateSynopsis}:movie)
    setCurrentMovies(newMovies)
}

const handleFilterMovies=(year)=>{
    let newMovies=currentMovies.filter(movie=>movie.year<year);
    setCurrentMovies(newMovies);
}



  //See error below
  return (
    <div className="MoviesList componentBox">
      <ul>
          {movieItems}
      </ul>
      <button onClick={handleReverseMovies}>Reverse List</button>

      {/* <button onClick={()=>handleAddMovie()}>Add Movie</button> */}
      {/* <button onClick={handleAddMovie}>Add Movie</button> */}

      <button onClick={()=>handleUpdateSynopsis('Iconic Heart')}>Update Synopsis</button>
      <button onClick={()=>handleFilterMovies(2000)}>Filter Movies</button>

      <AddMovieForm onAddMovie={handleAddMovie}/>
      
    </div>
  )
}
export default MoviesList