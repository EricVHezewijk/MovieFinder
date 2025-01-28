import React from 'react'
import '../css/Favorites.css'
import { useMovieContext } from '../context/MovieContext'
import MovieCard from '../components/MovieCard'

function Favorites() {

  const {favorites} = useMovieContext()
  console.log(favorites)

  return (
    <>
      {favorites.length == 0 ? (<div className='favorites-empty'>
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your favorties and they will appear here.</p>
      </div>
      ) : (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}

    </>
  )
}

export default Favorites
