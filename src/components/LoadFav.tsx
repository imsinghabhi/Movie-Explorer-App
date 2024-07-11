// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import localforage from 'localforage';
// import { loadFavorites } from '../features/movies/moviesSlice';
// import { selectIsLoggedIn } from '../features/movies/userSlice';
// import { Movie } from '../types/Movie';

// const useLoadFavorites = () => {
//   const dispatch = useDispatch();
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   useEffect(() => {
//     if (isLoggedIn) {
//       localforage.getItem('favoriteMovies').then((favorites) => {
//         if (favorites) {
//           dispatch(loadFavorites(favorites as Movie[]));
//         }
//       });
//     } else {
//       dispatch(loadFavorites([]));
//     }
//   }, [isLoggedIn, dispatch]);
// };

// export default useLoadFavorites;



import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import localforage from 'localforage';
// import { loadFavorites } from '../features/movies/moviesSlice';
import { selectIsLoggedIn } from '../features/movies/userSlice';
import { Movie } from '../types/Movie';

const useLoadFavorites = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    const loadFavoriteMovies = async () => {
      try {
        if (isLoggedIn) {
          const favorites = await localforage.getItem<Movie[]>('favoriteMovies');
          if (favorites) {
            // dispatch(loadFavorites(favorites));
          }
        } else {
          // dispatch(loadFavorites([]));
        }
      } catch (error) {
        console.error('Error loading favorite movies:', error);
      }
    };

    loadFavoriteMovies();
  }, [isLoggedIn, dispatch]);
};

export default useLoadFavorites;
