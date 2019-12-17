import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MovieCard from './MovieCard';

const Movie = (props) => {
  const [movie, setMovie] = useState();
  const { movieID } = useParams();
 
  useEffect(() => {

       axios
        .get(`http://localhost:5000/api/movies/${movieID}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[movieID]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
  // return (
  //   <div className="save-wrapper">
  //   <MovieCard />
  //   <div className="save-button">Save</div>
  //   </div>
  // )

}

export default Movie;
