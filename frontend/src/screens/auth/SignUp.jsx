import React from 'react';
import {
  Button,
  TextField,
  Link,
  Grid,
  Container,
  Typography,
} from '@mui/material';
import { signup } from '../../service/ApiService';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    // 오브젝트에서 form에 저장된 데이터를 맵의 형태로 바꿔줌.
    const data = new FormData(event.target);
    const email = data.get('email');
    const password1 = data.get('password1');
    const password2 = data.get('password2');
    signup({ email: email, password1: password1, password2: password2 }).then(
      (response) => {
        // 계정 생성 성공 시 login페이지로 리디렉트
        window.location.href = '/login';
      }
    );
  }

  render() {
    return (
      <Container component="main" maxWidth="xs" style={{ marginTop: '8%' }}>
        <form noValidate onSubmit={this.handleSubmit}>
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
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
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
  }
}

export default SignUp;
