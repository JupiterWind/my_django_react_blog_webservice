import { Divider, Button } from '@mui/material';
import { signout } from '../../../service/ApiService'; // signout 추가

const Menu = () => (
  <div>
    드로워
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
