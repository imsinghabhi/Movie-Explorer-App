import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography, Container } from '@mui/material';
import { selectFavoriteMovies } from '../features/movies/userSlice';
import MovieCard from '../components/MovieCard';

const FavoriteMoviesPage: React.FC = () => {
  const favoriteMovies = useSelector(selectFavoriteMovies);

  return (
    <Container sx={{ padding: '16px' }}>
      {favoriteMovies.length === 0 ? (
        <Typography variant="body1">You have no favorite movies.</Typography>
      ) : (
        <Grid container spacing={3} style={{ marginLeft: '25px' }}>
          {favoriteMovies.map((movie) => (
            <Grid item key={movie.imdbID} >
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default FavoriteMoviesPage;
