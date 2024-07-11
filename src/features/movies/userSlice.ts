
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { User } from '../../types/User';
// import localforage from 'localforage';
// import { RootState } from '../../app/rootReducer';

// interface UserState {
//   users: User[];
//   error: string | null;
//   currentUser: User | null;
//   isLoggedIn: boolean;
// }

// const initialState: UserState = {
//   users: [],
//   error: null,
//   currentUser: null,
//   isLoggedIn: false,
// };

// localforage.config({
//   driver: localforage.INDEXEDDB, 
//   name: 'movie-explorer',
//   storeName: 'users',
// });

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     addUser(state, action: PayloadAction<User>) {
//       if (state.users.length < 5) {
//         const newUsers = [...state.users, action.payload];
//         state.users = newUsers;
//         localforage.setItem('users', newUsers)
//           .catch((error) => {
//             state.error = `Error saving users: ${error.message}`;
//           });
//         state.error = null;
//       } else {
//         state.error = 'User limit reached';
//       }
//     },
//     loadUsers(state, action: PayloadAction<User[]>) {
//       state.users = action.payload;
//     },
//     clearError(state) {
//       state.error = null;
//     },
//     setCurrentUser(state, action: PayloadAction<User | null>) {
//       state.currentUser = action.payload;
//       state.isLoggedIn = action.payload !== null;
//       if (action.payload) {
//         localforage.setItem('currentUser', action.payload)
//           .catch((error) => {
//             state.error = `Error saving current user: ${error.message}`;
//           });
//       } else {
//         localforage.removeItem('currentUser')
//           .catch((error) => {
//             state.error = `Error removing current user: ${error.message}`;
//           });
//       }
//     },
//     setError(state, action: PayloadAction<string | null>) {
//       state.error = action.payload;
//     },
//     logout(state) {
//       state.currentUser = null;
//       state.isLoggedIn = false;
//       localforage.removeItem('currentUser')
//         .catch((error) => {
//           state.error = `Error removing current user: ${error.message}`;
//         });
//     },
//   },
// });

// export const { addUser, loadUsers, clearError, setCurrentUser, setError, logout } = userSlice.actions;

// export const selectCurrentUser = (state: RootState) => state.user.currentUser;
// export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;

// export default userSlice.reducer;


// In your userSlice file


// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { User } from '../../types/User';
// import localforage from 'localforage';
// import { RootState } from '../../app/rootReducer';

// interface UserState {
//   users: User[];
//   error: string | null;
//   currentUser: User | null;
//   isLoggedIn: boolean;
// }

// const initialState: UserState = {
//   users: [],
//   error: null,
//   currentUser: null,
//   isLoggedIn: false,
// };

// localforage.config({
//   driver: localforage.INDEXEDDB, 
//   name: 'movie-explorer',
//   storeName: 'users',
// });

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     addUser(state, action: PayloadAction<User>) {
//       if (state.users.length < 5) {
//         const newUsers = [...state.users, action.payload];
//         state.users = newUsers;
//         localforage.setItem('users', newUsers)
//           .catch((error) => {
//             state.error = `Error saving users: ${error.message}`;
//           });
//         state.error = null;
//       } else {
//         state.error = 'User limit reached';
//       }
//     },
//     loadUsers(state, action: PayloadAction<User[]>) {
//       state.users = action.payload;
//     },
//     clearError(state) {
//       state.error = null;
//     },
//     setCurrentUser(state, action: PayloadAction<User | null>) {
//       state.currentUser = action.payload;
//       state.isLoggedIn = action.payload !== null;
//       if (action.payload) {
//         localforage.setItem('currentUser', action.payload)
//           .catch((error) => {
//             state.error = `Error saving current user: ${error.message}`;
//           });
//       } else {
//         localforage.removeItem('currentUser')
//           .catch((error) => {
//             state.error = `Error removing current user: ${error.message}`;
//           });
//       }
//     },
//     setError(state, action: PayloadAction<string | null>) {
//       state.error = action.payload;
//     },
//     logout(state) {
//       state.currentUser = null;
//       state.isLoggedIn = false;
//       localforage.removeItem('currentUser')
//         .catch((error) => {
//           state.error = `Error removing current user: ${error.message}`;
//         });
//     },
//     initializeCurrentUser(state, action: PayloadAction<User | null>) {
//       state.currentUser = action.payload;
//       state.isLoggedIn = action.payload !== null;
//     },
//   },
// });

// export const { addUser, loadUsers, clearError, setCurrentUser, setError, logout, initializeCurrentUser } = userSlice.actions;

// export const selectCurrentUser = (state: RootState) => state.user.currentUser;
// export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;

// export default userSlice.reducer;


// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { User } from '../../types/User';
// import localforage from 'localforage';
// import { RootState } from '../../app/rootReducer';

// interface UserState {
//   users: User[];
//   error: string | null;
//   currentUser: User | null;
//   isLoggedIn: boolean;
// }

// const initialState: UserState = {
//   users: [],
//   error: null,
//   currentUser: null,
//   isLoggedIn: false,
// };

// localforage.config({
//   driver: localforage.INDEXEDDB, 
//   name: 'movie-explorer',
//   storeName: 'users',
// });

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     addUser(state, action: PayloadAction<User>) {
//       if (state.users.length < 5) {
//         const newUsers = [...state.users, action.payload];
//         state.users = newUsers;
//         localforage.setItem('users', newUsers)
//           .catch((error) => {
//             state.error = `Error saving users: ${error.message}`;
//           });
//         state.error = null;
//       } else {
//         state.error = 'User limit reached';
//       }
//     },
//     loadUsers(state, action: PayloadAction<User[]>) {
//       state.users = action.payload;
//     },
//     clearError(state) {
//       state.error = null;
//     },
//     setCurrentUser(state, action: PayloadAction<User | null>) {
//       state.currentUser = action.payload;
//       state.isLoggedIn = action.payload !== null;
//       if (action.payload) {
//         localforage.setItem('currentUser', action.payload)
//           .catch((error) => {
//             state.error = `Error saving current user: ${error.message}`;
//           });
//       } else {
//         localforage.removeItem('currentUser')
//           .catch((error) => {
//             state.error = `Error removing current user: ${error.message}`;
//           });
//       }
//     },
//     setError(state, action: PayloadAction<string | null>) {
//       state.error = action.payload;
//     },
//     logout(state) {
//       state.currentUser = null;
//       state.isLoggedIn = false;
//       localforage.removeItem('currentUser')
//         .catch((error) => {
//           state.error = `Error removing current user: ${error.message}`;
//         });
//       // localforage.removeItem('favoriteMovies')
//       //   .catch((error) => {
//       //     state.error = `Error removing favorite movies: ${error.message}`;
//       //   });
//     },
//     initializeCurrentUser(state, action: PayloadAction<User | null>) {
//       state.currentUser = action.payload;
//       state.isLoggedIn = action.payload !== null;
//     },
//   },
// });

// export const { addUser, loadUsers, clearError, setCurrentUser, setError, logout, initializeCurrentUser } = userSlice.actions;

// export const selectCurrentUser = (state: RootState) => state.user.currentUser;
// export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;

// export default userSlice.reducer;




//july 10 23:18


// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { User } from '../../types/User';
// import localforage from 'localforage';
// import { RootState } from '../../app/rootReducer';

// interface UserState {
//   users: User[];
//   error: string | null;
//   currentUser: User | null;
//   isLoggedIn: boolean;
// }

// const initialState: UserState = {
//   users: [],
//   error: null,
//   currentUser: null,
//   isLoggedIn: false,
// };

// localforage.config({
//   driver: localforage.INDEXEDDB, 
//   name: 'movie-explorer',
//   storeName: 'users',
// });

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     addUser(state, action: PayloadAction<User>) {
//       if (state.users.length < 5) {
//         const newUsers = [...state.users, action.payload];
//         state.users = newUsers;
//         localforage.setItem('users', newUsers)
//           .catch((error) => {
//             state.error = `Error saving users: ${error.message}`;
//           });
//         state.error = null;
//       } else {
//         state.error = 'User limit reached';
//       }
//     },
//     loadUsers(state, action: PayloadAction<User[]>) {
//       state.users = action.payload;
//     },
//     clearError(state) {
//       state.error = null;
//     },
//     setCurrentUser(state, action: PayloadAction<User | null>) {
//       state.currentUser = action.payload;
//       state.isLoggedIn = action.payload !== null;
//       if (action.payload) {
//         localforage.setItem('currentUser', action.payload)
//           .catch((error) => {
//             state.error = `Error saving current user: ${error.message}`;
//           });
//       } else {
//         localforage.removeItem('currentUser')
//           .catch((error) => {
//             state.error = `Error removing current user: ${error.message}`;
//           });
//       }
//     },
//     setError(state, action: PayloadAction<string | null>) {
//       state.error = action.payload;
//     },
//     logout(state) {
//       state.currentUser = null;
//       state.isLoggedIn = false;
//       localforage.removeItem('currentUser')
//         .catch((error) => {
//           state.error = `Error removing current user: ${error.message}`;
//         });
//       // localforage.removeItem('favoriteMovies')
//       //   .catch((error) => {
//       //     state.error = `Error removing favorite movies: ${error.message}`;
//       //   });
//     },
//     initializeCurrentUser(state, action: PayloadAction<User | null>) {
//       state.currentUser = action.payload;
//       state.isLoggedIn = action.payload !== null;
//     },
//   },
// });

// export const { addUser, loadUsers, clearError, setCurrentUser, setError, logout, initializeCurrentUser } = userSlice.actions;

// export const selectCurrentUser = (state: RootState) => state.user.currentUser;
// export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;

// export default userSlice.reducer;


// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { User } from '../../types/User';
// import { Movie } from '../../types/Movie';
// import localforage from 'localforage';
// import { RootState } from '../../app/rootReducer';

// interface UserState {
//   users: User[];
//   error: string | null;
//   currentUser: User | null;
//   isLoggedIn: boolean;
// }

// const initialState: UserState = {
//   users: [],
//   error: null,
//   currentUser: null,
//   isLoggedIn: false,
// };

// localforage.config({
//   driver: localforage.INDEXEDDB, 
//   name: 'movie-explorer',
//   storeName: 'users',
// });

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     addUser(state, action: PayloadAction<User>) {
//       const newUsers = [...state.users, action.payload];
//       state.users = newUsers;
//       localforage.setItem('users', newUsers)
//         .catch((error) => {
//           state.error = `Error saving users: ${error.message}`;
//         });
//       state.error = null;
//     },
//     loadUsers(state, action: PayloadAction<User[]>) {
//       state.users = action.payload;
//     },
//     clearError(state) {
//       state.error = null;
//     },
//     setCurrentUser(state, action: PayloadAction<User | null>) {
//       state.currentUser = action.payload;
//       state.isLoggedIn = action.payload !== null;
//       if (action.payload) {
//         localforage.setItem('currentUser', action.payload)
//           .catch((error) => {
//             state.error = `Error saving current user: ${error.message}`;
//           });
//       } else {
//         localforage.removeItem('currentUser')
//           .catch((error) => {
//             state.error = `Error removing current user: ${error.message}`;
//           });
//       }
//     },
//     setError(state, action: PayloadAction<string | null>) {
//       state.error = action.payload;
//     },
//     logout(state) {
//       state.currentUser = null;
//       state.isLoggedIn = false;
//       localforage.removeItem('currentUser')
//         .catch((error) => {
//           state.error = `Error removing current user: ${error.message}`;
//         });
//     },
//     initializeCurrentUser(state, action: PayloadAction<User | null>) {
//       state.currentUser = action.payload;
//       state.isLoggedIn = action.payload !== null;
//     },
//     addFavorite(state, action: PayloadAction<Movie>) {
//       if (state.currentUser) {
//         const updatedUser = {
//           ...state.currentUser,
//           favoriteMovies: [...state.currentUser.favoriteMovies, action.payload]
//         };
//         state.currentUser = updatedUser;
//         localforage.setItem('currentUser', updatedUser)
//           .catch((error) => {
//             state.error = `Error saving favorite movie: ${error.message}`;
//           });
//       }
//     },
//     removeFavorite(state, action: PayloadAction<string>) {
//       if (state.currentUser) {
//         const updatedUser = {
//           ...state.currentUser,
//           favoriteMovies: state.currentUser.favoriteMovies.filter(movie => movie.imdbID !== action.payload)
//         };
//         state.currentUser = updatedUser;
//         localforage.setItem('currentUser', updatedUser)
//           .catch((error) => {
//             state.error = `Error removing favorite movie: ${error.message}`;
//           });
//       }
//     },
//     loadFavoriteMovies(state, action: PayloadAction<Movie[]>) {
//       if (state.currentUser) {
//         state.currentUser.favoriteMovies = action.payload;
//       }
//     }
//   },
// });

// export const { addUser, loadUsers, clearError, setCurrentUser, setError, logout, initializeCurrentUser, addFavorite, removeFavorite ,loadFavoriteMovies} = userSlice.actions;

// export const selectCurrentUser = (state: RootState) => state.user.currentUser;
// export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
// export const selectFavoriteMovies = (state: RootState) => state.user.currentUser?.favoriteMovies || [];

// export default userSlice.reducer;


// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { User } from '../../types/User';
// import { Movie } from '../../types/Movie';
// import localforage from 'localforage';
// import { RootState } from '../../app/rootReducer';

// interface UserState {
//   users: User[];
//   error: string | null;
//   currentUser: User | null;
//   isLoggedIn: boolean;
// }

// const initialState: UserState = {
//   users: [],
//   error: null,
//   currentUser: null,
//   isLoggedIn: false,
// };

// localforage.config({
//   driver: localforage.INDEXEDDB,
//   name: 'movie-explorer',
//   storeName: 'users',
// });

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     addUser(state, action: PayloadAction<User>) {
//       const newUsers = [...state.users, action.payload];
//       state.users = newUsers;
//       localforage.setItem('users', newUsers).catch((error) => {
//         state.error = `Error saving users: ${error.message}`;
//       });
//       state.error = null;
//     },
//     loadUsers(state, action: PayloadAction<User[]>) {
//       state.users = action.payload;
//     },
//     clearError(state) {
//       state.error = null;
//     },
//     setCurrentUser(state, action: PayloadAction<User | null>) {
//       state.currentUser = action.payload;
//       state.isLoggedIn = action.payload !== null;
//       if (action.payload) {
//         localforage.setItem('currentUser', action.payload).catch((error) => {
//           state.error = `Error saving current user: ${error.message}`;
//         });
//       } else {
//         localforage.removeItem('currentUser').catch((error) => {
//           state.error = `Error removing current user: ${error.message}`;
//         });
//       }
//     },
//     setError(state, action: PayloadAction<string | null>) {
//       state.error = action.payload;
//     },
//     logout(state) {
//       state.currentUser = null;
//       state.isLoggedIn = false;
//       localforage.removeItem('currentUser').catch((error) => {
//         state.error = `Error removing current user: ${error.message}`;
//       });
//     },
//     initializeCurrentUser(state, action: PayloadAction<User | null>) {
//       state.currentUser = action.payload;
//       state.isLoggedIn = action.payload !== null;
//       if (action.payload) {
//         localforage
//           .getItem<Movie[]>('favoriteMovies')
//           .then((favoriteMovies) => {
//             if (favoriteMovies && state.currentUser) {
//               state.currentUser.favoriteMovies = favoriteMovies;
//             }
//           })
//           .catch((error) => {
//             state.error = `Error loading favorite movies: ${error.message}`;
//           });
//       }
//     },
//     addFavorite(state, action: PayloadAction<Movie>) {
//       if (state.currentUser) {
//         const updatedUser = {
//           ...state.currentUser,
//           favoriteMovies: [...state.currentUser.favoriteMovies, action.payload],
//         };
//         state.currentUser = updatedUser;
//         localforage.setItem('currentUser', updatedUser).catch((error) => {
//           state.error = `Error saving favorite movie: ${error.message}`;
//         });
//         localforage.setItem('favoriteMovies', updatedUser.favoriteMovies).catch((error) => {
//           state.error = `Error saving favorite movies: ${error.message}`;
//         });
//       }
//     },
//     removeFavorite(state, action: PayloadAction<string>) {
//       if (state.currentUser) {
//         const updatedUser = {
//           ...state.currentUser,
//           favoriteMovies: state.currentUser.favoriteMovies.filter(
//             (movie) => movie.imdbID !== action.payload
//           ),
//         };
//         state.currentUser = updatedUser;
//         localforage.setItem('currentUser', updatedUser).catch((error) => {
//           state.error = `Error removing favorite movie: ${error.message}`;
//         });
//         localforage.setItem('favoriteMovies', updatedUser.favoriteMovies).catch((error) => {
//           state.error = `Error saving favorite movies: ${error.message}`;
//         });
//       }
//     },
//     loadFavoriteMovies(state, action: PayloadAction<Movie[]>) {
//       if (state.currentUser) {
//         state.currentUser.favoriteMovies = action.payload;
//       }
//     },
//   },
// });

// export const {
//   addUser,
//   loadUsers,
//   clearError,
//   setCurrentUser,
//   setError,
//   logout,
//   initializeCurrentUser,
//   addFavorite,
//   removeFavorite,
//   loadFavoriteMovies,
// } = userSlice.actions;

// export const selectCurrentUser = (state: RootState) => state.user.currentUser;
// export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
// export const selectFavoriteMovies = (state: RootState) => state.user.currentUser?.favoriteMovies || [];

// export default userSlice.reducer;


import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/User';
import { Movie } from '../../types/Movie';
import localforage from 'localforage';
import { RootState } from '../../app/rootReducer';

interface UserState {
  users: User[];
  error: string | null;
  currentUser: User | null;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  users: [],
  error: null,
  currentUser: null,
  isLoggedIn: false,
};

localforage.config({
  driver: localforage.INDEXEDDB,
  name: 'movie-explorer',
  storeName: 'users',
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      const newUsers = [...state.users, action.payload];
      state.users = newUsers;
      localforage.setItem('users', newUsers).catch((error) => {
        state.error = `Error saving users: ${error.message}`;
      });
      state.error = null;
    },
    loadUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
    setCurrentUser(state, action: PayloadAction<User | null>) {
      state.currentUser = action.payload;
      state.isLoggedIn = action.payload !== null;
      if (action.payload) {
        localforage.setItem('currentUser', action.payload).catch((error) => {
          state.error = `Error saving current user: ${error.message}`;
        });
      } else {
        localforage.removeItem('currentUser').catch((error) => {
          state.error = `Error removing current user: ${error.message}`;
        });
      }
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    logout(state) {
      state.currentUser = null;
      state.isLoggedIn = false;
      localforage.removeItem('currentUser').catch((error) => {
        state.error = `Error removing current user: ${error.message}`;
      });
    },
    initializeCurrentUser(state, action: PayloadAction<User | null>) {
      state.currentUser = action.payload;
      state.isLoggedIn = action.payload !== null;
      if (action.payload) {
        localforage
          .getItem<Movie[]>('favoriteMovies')
          .then((favoriteMovies) => {
            if (favoriteMovies && state.currentUser) {
              state.currentUser.favoriteMovies = favoriteMovies;
            }
          })
          .catch((error) => {
            state.error = `Error loading favorite movies: ${error.message}`;
          });
      }
    },
    addFavorite(state, action: PayloadAction<Movie>) {
      if (state.currentUser) {
        const updatedUser = {
          ...state.currentUser,
          favoriteMovies: [...state.currentUser.favoriteMovies, action.payload],
        };
        state.currentUser = updatedUser;
        localforage.setItem('currentUser', updatedUser).then(()=>localforage.setItem('users', updatedUser)).catch((error) => {
          state.error = `Error saving favorite movie: ${error.message}`;
        });
      }
    },
    removeFavorite(state, action: PayloadAction<string>) {
      if (state.currentUser) {
        const updatedUser = {
          ...state.currentUser,
          favoriteMovies: state.currentUser.favoriteMovies.filter(
            (movie) => movie.imdbID !== action.payload
          ),
        };
        state.currentUser = updatedUser;
        localforage.setItem('currentUser', updatedUser).catch((error) => {
          state.error = `Error removing favorite movie: ${error.message}`;
        });
      }
    },
    loadFavoriteMovies(state, action: PayloadAction<Movie[]>) {
      if (state.currentUser) {
        state.currentUser.favoriteMovies = action.payload;
      }
    },
  },
});

export const {
  addUser,
  loadUsers,
  clearError,
  setCurrentUser,
  setError,
  logout,
  initializeCurrentUser,
  addFavorite,
  removeFavorite,
  loadFavoriteMovies,
} = userSlice.actions;

export const selectCurrentUser = (state: RootState) => state.user.currentUser;
export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const selectFavoriteMovies = (state: RootState) => state.user.currentUser?.favoriteMovies || [];

export default userSlice.reducer;
