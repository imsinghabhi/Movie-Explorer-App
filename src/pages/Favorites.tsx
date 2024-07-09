
// import React from 'react';
// import { useSelector } from 'react-redux';
// import { selectFavoriteMovies } from '../features/movies/moviesSelectors';
// import MovieCard from '../components/MovieCard';

// const Favorites: React.FC = () => {
//   const favoriteMovies = useSelector(selectFavoriteMovies);
//   console.log(favoriteMovies,"fav")

//   return (
//     <div>
//       {favoriteMovies.length > 0 ? (
//         favoriteMovies.map((movie) => (
//           <MovieCard key={movie.imdbID} movie={movie} />
//         ))
//       ) : (
//         <p>No favorite movies yet.</p>
//       )}
//     </div>
//   );
// };

// export default Favorites;


import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavoriteMovies } from '../features/movies/moviesSelectors';
import MovieCard from '../components/MovieCard';
import { selectIsLoggedIn } from '../features/movies/userSlice';

const Favorites: React.FC = () => {
  const favoriteMovies = useSelector(selectFavoriteMovies);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <>
          {favoriteMovies.length > 0 ? (
            favoriteMovies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))
          ) : (
            <p>No favorite movies yet.</p>
          )}
        </>
      ) : (
        <p>Please log in to view your favorite movies.</p>
      )}
    </div>
  );
};

export default Favorites;
