
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  Divider,
  Box,
  List,
  ListItem,
  ListItemText,
  
} from '@mui/material';
import { selectMovies } from '../features/movies/moviesSelectors';
import { selectCurrentUser,selectIsLoggedIn } from '../features/movies/userSlice';
import { selectComments,addComment } from '../features/movies/commentsSlice';
import { selectRatings,addRating } from '../features/movies/ratingsSlice';
import { Movie } from '../types/Movie';
import { Rating } from '../types/Ratings';
import { Comment } from '../types/comments';

const MovieDetails: React.FC = () => {
  const { imdbID } = useParams<{ imdbID: string }>();
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const ratings = useSelector(selectRatings);
  const comments = useSelector(selectComments);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const currentUser = useSelector(selectCurrentUser);

  const movie = movies.find((movie: Movie) => movie.imdbID === imdbID);

  const [newRating, setNewRating] = useState('');
  const [newComment, setNewComment] = useState('');

  const handleAddRating = () => {
    if (newRating && isLoggedIn && currentUser && movie) {
      const rating: Rating = {
        id: `${currentUser.id}-${movie.imdbID}`,
        userId: currentUser.id,
        userName: currentUser.name,  // Set the user's name
        movieId: movie.imdbID,
        score: newRating,
        comment: '',
      };
      dispatch(addRating(rating));
      setNewRating('');
    }
  };

  const handleAddComment = () => {
    if (newComment && isLoggedIn && currentUser && movie) {
      const comment: Comment = {
        id: `${currentUser.id}-${movie.imdbID}`,
        userId: currentUser.id,
        userName: currentUser.name,  // Set the user's name
        movieId: movie.imdbID,
        text: newComment,
      };
      dispatch(addComment(comment));
      setNewComment('');
    }
  };

  useEffect(() => {
    // Load existing ratings and comments from localforage or backend
  }, [dispatch]);

  if (!movie) {
    return <div style={{ color: 'white', textAlign: 'center' }}>Movie not found</div>;
  }

  return (
    <Card style={{ display: 'flex', flexDirection: 'row', padding: '16px', backgroundColor: 'grey', color: 'white' }}>
      <CardMedia
        component="img"
        image={movie.Poster}
        title={movie.Title}
        style={{ width: '300px', height: 'auto', marginRight: '16px' }}
      />
      <CardContent style={{ flex: '1 1 auto' }}>
        <Typography variant="h4" gutterBottom style={{ color: 'white' }}>{movie.Title}</Typography>
        <Typography variant="body1" component="p" style={{ color: 'white' }}>
          <strong>Genre:</strong> {movie.Genre}<br />
          <strong>Director:</strong> {movie.Director}<br />
          <strong>Runtime:</strong> {movie.Runtime}<br />
          <strong>Plot:</strong> {movie.Plot}<br />
          <strong>Actors:</strong> {movie.Actors}<br />
          <strong>Language:</strong> {movie.Language}<br />
          <strong>Ratings:</strong> {ratings.filter(rating => rating.movieId === movie.imdbID).map((rating, index) => (
            <span key={index}>{rating.userName}: {rating.score}<br /></span>
          ))}
        </Typography>

        <Divider style={{ margin: '16px 0', backgroundColor: 'white' }} />

        <Box>
          <Typography variant="h5" gutterBottom style={{ color: 'white' }}>Ratings</Typography>
          <List>
            {ratings.filter(rating => rating.movieId === movie.imdbID).map(rating => (
              <ListItem key={rating.id}>
                <ListItemText primary={`${rating.userName}: ${rating.score}`} style={{ color: 'white' }} />
              </ListItem>
            ))}
          </List>
          {isLoggedIn && (
            <Box mt={2}>
              <Typography variant="h6" gutterBottom style={{ color: 'white' }}>Add Rating</Typography>
              <TextField
                label="Rating"
                value={newRating}
                onChange={(e) => setNewRating(e.target.value)}
                style={{ marginBottom: '8px', color: 'white' }}
                fullWidth
                InputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: 'white' } }}
              />
              <Button variant="contained" color="primary" onClick={handleAddRating}>
                Submit Rating
              </Button>
            </Box>
          )}
        </Box>

        <Divider style={{ margin: '16px 0', backgroundColor: 'white' }} />

        <Box>
          <Typography variant="h5" gutterBottom style={{ color: 'white' }}>Comments</Typography>
          <List>
            {comments.filter(comment => comment.movieId === movie.imdbID).map(comment => (
              <ListItem key={comment.id}>
                <ListItemText primary={`${comment.userName}: ${comment.text}`} style={{ color: 'white' }} />
              </ListItem>
            ))}
          </List>
          {isLoggedIn && (
            <Box mt={2}>
              <Typography variant="h6" gutterBottom style={{ color: 'white' }}>Add Comment</Typography>
              <TextField
                label="Comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                style={{ marginBottom: '8px', color: 'white' }}
                fullWidth
                InputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: 'white' } }}
              />
              <Button variant="contained" color="primary" onClick={handleAddComment}>
                Submit Comment
              </Button>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieDetails;
