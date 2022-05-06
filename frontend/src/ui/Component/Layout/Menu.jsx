import { Divider, Button, Link } from '@mui/material';
import { signout } from '../../../service/ApiService'; // signout 추가

const Menu = () => (
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
      onClick={signout}
    >
      로그아웃
    </Button>
  </div>
);

export default Menu;
