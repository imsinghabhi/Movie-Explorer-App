
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Favorite, FavoriteBorder } from '@mui/icons-material';
// import { Typography, IconButton, Card, CardContent, CardMedia } from '@mui/material';
// import { Movie } from '../types/Movie';
// import { useDispatch, useSelector } from 'react-redux';
// import { addFavorite, removeFavorite } from '../features/movies/moviesSlice';
// import { selectFavoriteMovies } from '../features/movies/moviesSelectors';

// interface MovieCardProps {
//   movie: Movie;
// }

// const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
//   const dispatch = useDispatch();
//   const favoriteMovies = useSelector(selectFavoriteMovies);

//   const isFavorite = favoriteMovies.some(
//     (favMovie) => favMovie.imdbID === movie.imdbID);

//   const handleFavorite = () => {
//     if (isFavorite) {
//       dispatch(removeFavorite(movie.imdbID));
//     } else {
//       dispatch(addFavorite(movie));
//     }
//   };

//   return (
//     <Card style={{ 
//       marginBottom: '16px', 
//       display: 'flex', 
//       flexDirection: 'row-reverse', 
//       alignItems: 'center',
//       backgroundColor: '#333', // Dark gray background
//       color: 'white'
//     }}>
//       <CardMedia
//         component="img"
//         image={movie.Poster}
//         title={movie.Title}
//         style={{ width: 140, height: 'auto', marginLeft: '16px' }}
//       />
//       <CardContent style={{ flex: '1 1 auto' }}>
//         <Link to={`/movies/${movie.imdbID}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//           <Typography variant="h6" gutterBottom style={{ color: 'white' }}>{movie.Title}</Typography>
//         </Link>
//         <Typography variant="body2" component="p" style={{ color: '#bbb' }}>
//           <strong>Genre:</strong> {movie.Genre}<br />
//           <strong>Director:</strong> {movie.Director}<br />
//           <strong>Runtime:</strong> {movie.Runtime}<br />
//           <strong>Ratings:</strong> {movie.Ratings.map((rating, index) => (
//             <span key={index}>{rating.Source}: {rating.Value}<br /></span>
//           ))}
//         </Typography>
//         <IconButton onClick={handleFavorite} color="secondary">
//           {isFavorite ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder style={{ color: 'white' }} />}
//         </IconButton>
//       </CardContent>
//     </Card>
//   );
// };

// export default MovieCard;


import React from 'react';
import { Link } from 'react-router-dom';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Typography, IconButton, Card, CardContent, CardMedia } from '@mui/material';
import { Movie } from '../types/Movie';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../features/movies/moviesSlice';
import { selectFavoriteMovies } from '../features/movies/moviesSelectors';
import { selectIsLoggedIn } from '../features/movies/userSlice';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(selectFavoriteMovies);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const isFavorite = favoriteMovies.some((favMovie) => favMovie.imdbID === movie.imdbID);

  const handleFavorite = () => {
    if (!isLoggedIn) {
      alert('Please log in to add movies to your favorites.');
      return;
    }
    if (isFavorite) {
      dispatch(removeFavorite(movie.imdbID));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <Card style={{ marginBottom: '16px', display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', backgroundColor: '#333', color: 'white' }}>
      <CardMedia
        component="img"
        image={movie.Poster}
        title={movie.Title}
        style={{ width: 140, height: 'auto', marginLeft: '16px' }}
      />
      <CardContent style={{ flex: '1 1 auto' }}>
        <Link to={`/movies/${movie.imdbID}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6" gutterBottom style={{ color: 'white' }}>{movie.Title}</Typography>
        </Link>
        <Typography variant="body2" component="p" style={{ color: '#bbb' }}>
          <strong>Genre:</strong> {movie.Genre}<br />
          <strong>Director:</strong> {movie.Director}<br />
          <strong>Runtime:</strong> {movie.Runtime}<br />
          <strong>Ratings:</strong> {movie.Ratings.map((rating, index) => (
            <span key={index}>{rating.Source}: {rating.Value}<br /></span>
          ))}
        </Typography>
        <IconButton onClick={handleFavorite} color="secondary">
          {isFavorite ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder style={{ color: 'white' }} />}
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
