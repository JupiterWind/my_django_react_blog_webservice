import { Divider, Button, Link } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/authThunk';

const Menu = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Link href="/login">
        <Button type="submit" fullWidth variant="contained" color="primary">
          로그인
        </Button>
      </Link>
      <Divider />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={() => dispatch(logout())}
      >
        로그아웃
      </Button>
    </div>
  );
};
export default Menu;
