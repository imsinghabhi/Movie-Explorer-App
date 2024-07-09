import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Typography, Grid, Link } from '@mui/material'; 
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/rootReducer';
import { AppDispatch } from '../app/store';
import { setCurrentUser, loadUsers, setError, clearError } from '../features/movies/userSlice';
import localforage from 'localforage';
import { User } from '../types/User';
import LogoutButton from '../components/Logout';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { loginSchema } from '../validationSchemas/UserSchema';

interface LoginFormData {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate(); 
  const { error, currentUser } = useSelector((state: RootState) => state.user);
  const { control, handleSubmit, reset, formState: { errors } } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    const fetchUsers = async () => {
      const storedUsers = await localforage.getItem<User[]>('users');
      if (storedUsers) {
        dispatch(loadUsers(storedUsers));
      }
    };

    fetchUsers();
  }, [dispatch]);

  const onSubmit = async (data: LoginFormData) => {
    const storedUsers = await localforage.getItem<User[]>('users');
    if (storedUsers) {
      const user = storedUsers.find(
        (user) => user.username === data.username && user.password === data.password
      );
      if (user) {
        dispatch(setCurrentUser(user));
        await localforage.setItem('currentUser', user); // Store current user in localforage
        dispatch(clearError());
        reset();
        alert('Login successful!');
        navigate('/'); 
      } else {
        dispatch(setError('Invalid username or password'));
      }
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      {error && (
        <Grid item xs={12}>
          <Typography color="error">{error}</Typography>
          <Button onClick={() => dispatch(clearError())}>Clear Error</Button>
        </Grid>
      )}
      {currentUser ? (
        <Grid item xs={12}>
          <Typography variant="h6">Welcome, {currentUser.name}!</Typography>
          <LogoutButton />
        </Grid>
      ) : (
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="username"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField {...field} label="Username" fullWidth margin="normal" error={!!errors.username} helperText={errors.username?.message} />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Password"
                      type="password"
                      fullWidth
                      margin="normal"
                      error={!!errors.password}
                      helperText={errors.password?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
          <Grid item xs={12}>
            <Typography align="center">
              Don't have an account?{' '}
              <Link component={RouterLink} to="/register">
                Register here
              </Link>
            </Typography>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default LoginForm;

// import React, { useEffect } from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import { TextField, Button, Typography, Grid, Link } from '@mui/material'; 
// import { yupResolver } from '@hookform/resolvers/yup';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../app/rootReducer';
// import { AppDispatch } from '../app/store';
// import { setCurrentUser, loadUsers, setError, clearError } from '../features/movies/userSlice';
// import localforage from 'localforage';
// import { User } from '../types/User';
// import LogoutButton from '../components/Logout';
// import { useNavigate, Link as RouterLink } from 'react-router-dom';
// import { loginSchema } from '../validationSchemas/UserSchema';

// interface LoginFormData {
//   username: string;
//   password: string;
// }

// const LoginForm: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const navigate = useNavigate(); 
//   const { error, users, currentUser } = useSelector((state: RootState) => state.user);
//   const { control, handleSubmit, reset, formState: { errors } } = useForm<LoginFormData>({
//     resolver: yupResolver(loginSchema),
//   });

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const storedUsers = await localforage.getItem<User[]>('users');
//       if (storedUsers) {
//         dispatch(loadUsers(storedUsers));
//       }
//     };

//     fetchUsers();
//   }, [dispatch]);

//   const onSubmit = async (data: LoginFormData) => {
//     const storedUsers = await localforage.getItem<User[]>('users');
//     if (storedUsers) {
//       const user = storedUsers.find(
//         (user) => user.username === data.username && user.password === data.password
//       );
//       if (user) {
//         dispatch(setCurrentUser(user));
//         await localforage.setItem('currentUser', user); // Store current user in localforage
//         dispatch(clearError());
//         reset();
//         alert('Login successful!');
//         navigate('/'); 
//       } else {
//         dispatch(setError('Invalid username or password'));
//       }
//     }
//   };

//   return (
//     <Grid container spacing={2} justifyContent="center">
//       {error && (
//         <Grid item xs={12}>
//           <Typography color="error">{error}</Typography>
//           <Button onClick={() => dispatch(clearError())}>Clear Error</Button>
//         </Grid>
//       )}
//       <Grid item xs={12} md={6}>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <Controller
//                 name="username"
//                 control={control}
//                 defaultValue=""
//                 render={({ field }) => (
//                   <TextField {...field} label="Username" fullWidth margin="normal" error={!!errors.username} helperText={errors.username?.message} />
//                 )}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Controller
//                 name="password"
//                 control={control}
//                 defaultValue=""
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     label="Password"
//                     type="password"
//                     fullWidth
//                     margin="normal"
//                     error={!!errors.password}
//                     helperText={errors.password?.message}
//                   />
//                 )}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button type="submit" variant="contained" color="primary" fullWidth>
//                 Login
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//         <Grid item xs={12}>
//           <Typography align="center">
//             Don't have an account?{' '}
//             <Link component={RouterLink} to="/register">
//               Register here
//             </Link>
//           </Typography>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };

// export default LoginForm;