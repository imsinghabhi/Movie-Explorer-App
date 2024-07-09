import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Typography, Grid, Link, CircularProgress } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/rootReducer';
import { AppDispatch } from '../app/store';
import { addUser, loadUsers } from '../features/movies/userSlice';
import localforage from 'localforage';
import { User } from '../types/User';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { registerSchema } from '../validationSchemas/UserSchema';

interface FormData {
  name: string;
  password: string;
  email: string;
  phone: string;
  username: string;
}

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { users } = useSelector((state: RootState) => state.user);
  const { control, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(registerSchema),
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const storedUsers = await localforage.getItem<User[]>('users');
      if (storedUsers) {
        dispatch(loadUsers(storedUsers));
      }
    };

    fetchUsers();
  }, [dispatch]);

  const onSubmit = (data: FormData) => {
    setLoading(true);
    // const user: User = { id: uuidv4(), ...data, comments: [], favoriteMovies: [] ,ratings:[]};
      const user: User = { id: uuidv4(), ...data};
    dispatch(addUser(user));
    setLoading(false);
    reset();
    navigate('/login');
  };

  return (
    <Grid container spacing={1} justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField {...field} label="Name" fullWidth margin="normal" size="small" error={!!errors.name} helperText={errors.name?.message} />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField {...field} label="Email" type="email" fullWidth margin="normal" size="small" error={!!errors.email} helperText={errors.email?.message} />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField {...field} label="Password" type="password" fullWidth margin="normal" size="small" error={!!errors.password} helperText={errors.password?.message} />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="phone"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField {...field} label="Phone" fullWidth margin="normal" size="small" error={!!errors.phone} helperText={errors.phone?.message} />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="username"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField {...field} label="Username" fullWidth margin="normal" size="small" error={!!errors.username} helperText={errors.username?.message} />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={users.length >= 5 || loading}
                style={{ marginTop: '16px' }}
              >
                {loading ? <CircularProgress size={24} /> : 'Register'}
              </Button>
            </Grid>
          </Grid>
        </form>
        <Typography align="center" style={{ marginTop: '16px' }}>
          Already have an account?{' '}
          <Link component={RouterLink} to="/login">
            Login here
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default RegisterForm;
