import React, { useEffect, useState } from 'react';
import {
  Button,
  TextField,
  Link,
  Grid,
  Container,
  Typography,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../features/auth/authThunk';
import { clearState } from '../../features/auth/authSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess, isError, errorMessage } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    email: '',
    password1: '',
    password2: '',
  });

  const { email, password1, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (dispatch && dispatch !== null && dispatch !== undefined)
      dispatch(register({ email, password1, password2 }));
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState());
      navigate('/login');
    }

    if (isError) {
      alert(errorMessage);
      dispatch(clearState());
      navigate('/signup');
    }
  }, [isSuccess, isError]);

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: '8%' }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography component="h1" variant="h5">
              계정 생성
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="이메일 주소"
              name="email"
              autoComplete="email"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password1"
              label="패스워드1"
              type="password"
              id="password1"
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password2"
              id="password2"
              label="패스워드2"
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              계정 생성
            </Button>
          </Grid>
        </Grid>
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
              이미 계정이 있습니까? 로그인 하세요.
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default SignUp;
