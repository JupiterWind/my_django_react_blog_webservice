import React, { useState } from 'react';
import {
  Button,
  Link,
  TextField,
  Grid,
  Typography,
  Container,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../features/auth/authThunk';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: '8%' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
        </Grid>
      </Grid>
      <form noValidate onSubmit={handleSubmit}>
        {' '}
        {/* submit 버튼을 누르면 handleSubmit이 실행됨. */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              required
              fullWidth
              id="email"
              label="이메일 주소"
              name="email"
              autoComplete="email"
              value={email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              required
              fullWidth
              name="password"
              label="패스워드"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              로그인
            </Button>
          </Grid>
          <Link href="/signup" variant="body2">
            <Grid item marginTop={2} marginLeft={2}>
              계정이 없습니까? 여기서 가입 하세요.
            </Grid>
          </Link>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;
