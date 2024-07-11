// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   Typography,
//   Card,
//   CardContent,
//   CardMedia,
//   Button,
//   TextField,
//   Divider,
//   Box,
//   List,
//   ListItem,
//   ListItemText,
//   Grid,
//   useTheme,
// } from '@mui/material';
// import { selectMovies } from '../features/movies/moviesSelectors';
// import { selectCurrentUser, selectIsLoggedIn } from '../features/movies/userSlice';
// import { selectRatings, addRating } from '../features/movies/ratingsSlice';
// import { Movie } from '../types/Movie';
// import { Rating } from '../types/Ratings';
// import { Comment } from '../types/comments';
// import localforage from 'localforage';
// import { loadRatings } from '../features/movies/ratingsSlice';
// import { loadComments } from '../features/movies/commentsSlice';

// const MovieDetails: React.FC = () => {
//   const { imdbID } = useParams<{ imdbID: string }>();
//   const dispatch = useDispatch();
//   const movies = useSelector(selectMovies);
//   const ratings = useSelector(selectRatings);
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const currentUser = useSelector(selectCurrentUser);
//   const theme = useTheme();

//   const movie = movies.find((movie: Movie) => movie.imdbID === imdbID);

//   const [newRating, setNewRating] = useState('');
//   const [newComment, setNewComment] = useState('');

//   const handleAddRating = () => {
//     if (newRating && isLoggedIn && currentUser && movie) {
//       const rating: Rating = {
//         id: `${currentUser.id}-${movie.imdbID}`,
//         userId: currentUser.id,
//         userName: currentUser.name,
//         movieId: movie.imdbID,
//         score: newRating,
//         comment: newComment,
//       };
//       dispatch(addRating(rating));
//       setNewRating('');
//       setNewComment('');
//     }
//   };

//   useEffect(() => {
//     const loadPersistedData = async () => {
//       try {
//         const storedRatings = await localforage.getItem<Rating[]>('ratings');
//         if (storedRatings) {
//           dispatch(loadRatings(storedRatings));
//         }
//         const storedComments = await localforage.getItem<Comment[]>('comments');
//         if (storedComments) {
//           dispatch(loadComments(storedComments));
//         }
//       } catch (error) {
//         console.error('Error loading persisted data:', error);
//       }
//     };

//     loadPersistedData();
//   }, [dispatch]);

//   if (!movie) {
//     return <div style={{ color: 'white', textAlign: 'center' }}>Movie not found</div>;
//   }

//   return (
//     <Card
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         backgroundColor: theme.palette.background.paper,
//         color: theme.palette.text.primary,
//         borderRadius: '12px',
//         overflow: 'hidden',
//         boxShadow: theme.shadows[5],
//         margin: '20px',
//       }}
//     >
//       <CardContent>
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={4}>
//             <CardMedia
//               component="img"
//               image={movie.Poster}
//               title={movie.Title}
//               style={{
//                 width: '100%',
//                 height: 'auto',
//                 borderRadius: '8px',
//                 boxShadow: theme.shadows[3],
//               }}
//             />
//           </Grid>
//           <Grid item xs={12} md={8}>
//             <Typography variant="h4" gutterBottom>
//               {movie.Title}
//             </Typography>
//             <Typography variant="body1" component="p">
//               <strong>Genre:</strong> {movie.Genre}
//               <br />
//               <strong>Director:</strong> {movie.Director}
//               <br />
//               <strong>Runtime:</strong> {movie.Runtime}
//               <br />
//               <strong>Plot:</strong> {movie.Plot}
//               <br />
//               <strong>Actors:</strong> {movie.Actors}
//               <br />
//               <strong>Language:</strong> {movie.Language}
//               <br />
//             </Typography>

//             <Divider style={{ margin: '16px 0' }} />

//             <Box>
//               <Typography variant="h5" gutterBottom>
//                 User Ratings and Comments
//               </Typography>
//               <List>
//                 {ratings.filter((rating) => rating.movieId === movie.imdbID).map((rating) => (
//                   <ListItem key={rating.id}>
//                     <ListItemText
//                       primary={`${rating.userName}: ${rating.score}`}
//                       secondary={rating.comment}
//                       style={{ color: theme.palette.text.secondary }}
//                     />
//                   </ListItem>
//                 ))}
//               </List>
//               {isLoggedIn && (
//                 <Box mt={2}>
//                   <Typography variant="h6" gutterBottom>
//                     Add Rating and Comment
//                   </Typography>
//                   <Box
//                     display="flex"
//                     flexDirection="column"
//                     alignItems="flex-start"
//                     width="100%"
//                   >
//                     <TextField
//                       label="Rating"
//                       value={newRating}
//                       onChange={(e) => setNewRating(e.target.value)}
//                       style={{ marginBottom: '8px', width: '50%' }}
//                       InputProps={{ style: { color: theme.palette.text.primary } }}
//                       InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
//                     />
//                     <TextField
//                       label="Comment"
//                       value={newComment}
//                       onChange={(e) => setNewComment(e.target.value)}
//                       style={{ marginBottom: '8px', width: '50%' }}
//                       fullWidth
//                       multiline
//                       rows={3}
//                       InputProps={{ style: { color: theme.palette.text.primary } }}
//                       InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
//                     />
//                   </Box>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={handleAddRating}
//                     style={{ marginTop: '16px' }}
//                   >
//                     Submit
//                   </Button>
//                 </Box>
//               )}
//             </Box>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// };

// export default MovieDetails;


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
  Grid,
  useTheme,
} from '@mui/material';
import { selectMovies } from '../features/movies/moviesSelectors';
import { selectCurrentUser, selectIsLoggedIn } from '../features/movies/userSlice';
import { selectRatings, addRating } from '../features/movies/ratingsSlice';
import { Movie } from '../types/Movie';
import { Rating } from '../types/Ratings';
import { Comment } from '../types/comments';
import localforage from 'localforage';
import { loadRatings } from '../features/movies/ratingsSlice';
import { loadComments } from '../features/movies/commentsSlice';

const MovieDetails: React.FC = () => {
  const { imdbID } = useParams<{ imdbID: string }>();
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const ratings = useSelector(selectRatings);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const currentUser = useSelector(selectCurrentUser);
  const theme = useTheme();

  const movie = movies.find((movie: Movie) => movie.imdbID === imdbID);

  const [newRating, setNewRating] = useState('');
  const [newComment, setNewComment] = useState('');

  const handleAddRating = () => {
    if (newRating && isLoggedIn && currentUser && movie) {
      const rating: Rating = {
        id: `${currentUser.id}-${movie.imdbID}`,
        userId: currentUser.id,
        userName: currentUser.name,
        movieId: movie.imdbID,
        score: newRating,
        comment: newComment,
      };
      dispatch(addRating(rating));
      setNewRating('');
      setNewComment('');
    }
  };

  useEffect(() => {
    const loadPersistedData = async () => {
      try {
        const storedRatings = await localforage.getItem<Rating[]>('ratings');
        if (storedRatings) {
          dispatch(loadRatings(storedRatings));
        }
        const storedComments = await localforage.getItem<Comment[]>('comments');
        if (storedComments) {
          dispatch(loadComments(storedComments));
        }
      } catch (error) {
        console.error('Error loading persisted data:', error);
      }
    };

    loadPersistedData();
  }, [dispatch]);

  if (!movie) {
    return <div style={{ color: 'white', textAlign: 'center' }}>Movie not found</div>;
  }

  return (
    <Card
      style={{
        backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#f0f0f0',
        color: theme.palette.text.primary,
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: theme.shadows[5],
        margin: '20px',
      }}
    >
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <CardMedia
              component="img"
              image={movie.Poster}
              title={movie.Title}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: theme.shadows[3],
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              {movie.Title}
            </Typography>
            <Typography variant="body1" component="p">
              <strong>Genre:</strong> {movie.Genre}
              <br />
              <strong>Director:</strong> {movie.Director}
              <br />
              <strong>Runtime:</strong> {movie.Runtime}
              <br />
              <strong>Plot:</strong> {movie.Plot}
              <br />
              <strong>Actors:</strong> {movie.Actors}
              <br />
              <strong>Language:</strong> {movie.Language}
              <br />
            </Typography>

            <Divider style={{ margin: '16px 0' }} />

            <Box>
              <Typography variant="h5" gutterBottom>
                User Ratings and Comments
              </Typography>
              <List>
                {ratings.filter((rating) => rating.movieId === movie.imdbID).map((rating) => (
                  <ListItem
                    key={rating.id}
                    style={{
                      background: theme.palette.mode === 'dark' ? '#555' : '#e0e0e0',
                      borderRadius: '8px',
                      marginBottom: '8px',
                    }}
                  >
                    <ListItemText
                      primary={`${rating.userName}: ${rating.score}`}
                      secondary={rating.comment}
                      style={{ color: theme.palette.text.secondary }}
                    />
                  </ListItem>
                ))}
              </List>
              {isLoggedIn && (
                <Box mt={2}>
                  <Typography variant="h6" gutterBottom>
                    Add Rating and Comment
                  </Typography>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    width="100%"
                  >
                    <TextField
                      label="Rating"
                      value={newRating}
                      onChange={(e) => setNewRating(e.target.value)}
                      style={{ marginBottom: '8px', width: '50%' }}
                      InputProps={{ style: { color: theme.palette.text.primary } }}
                      InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
                    />
                    <TextField
                      label="Comment"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      style={{ marginBottom: '8px', width: '50%' }}
                      fullWidth
                      multiline
                      rows={3}
                      InputProps={{ style: { color: theme.palette.text.primary } }}
                      InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
                    />
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddRating}
                    style={{ marginTop: '16px' }}
                  >
                    Submit
                  </Button>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MovieDetails;
