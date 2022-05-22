import { Divider, Button, Link, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData, logout } from '../../features/auth/authThunk';

const Menu = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, userData } = useSelector((state) => state.auth);

  return (
    <div>
      {userData.nickname || userData.email || '로그인이 필요합니다.'}
      <Divider />
      {isAuthenticated ? (
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => dispatch(logout())}
        >
          로그아웃
        </Button>
      ) : (
        <Link href="/login">
          <Button type="submit" fullWidth variant="contained" color="primary">
            로그인
          </Button>
        </Link>
      )}
    </div>
  );
};
export default Menu;
