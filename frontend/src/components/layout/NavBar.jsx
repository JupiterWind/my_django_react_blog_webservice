import { React, useState, useEffect } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { Link as NextLink } from 'next/link';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(18),
    marginRight: theme.spacing(1),
    '&.Mui-selected': {
      fontWeight: theme.typography.fontWeightBold,
      borderBottom: '3px solid #000',
    },
    '&.Mui-focusVisible': {
      fontWeight: theme.typography.fontWeightBold,
      borderBottom: '3px solid #000',
    },
  })
);

function getActiveValue(pathname) {
  if (!pathname) return -1;
  else {
    switch (pathname) {
      case '/':
        return 0;
      case '/login':
        return 1;
      default:
        return 0;
    }
  }
}

const NavBar = () => {
  const [value, setValue] = useState(0);
  const location = useLocation();
  const router = useRouter();

  useEffect(() => {
    //console.log(location, router);
    const pathname = location.pathname || router.asPath;
    let activeValue = getActiveValue(pathname);
    setValue(activeValue);
  }, [location]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        textColor="primary"
        indicatorColor="primary"
      >
        <StyledTab value={0} label="오늘" to="/" component={Link} />
        <StyledTab value={1} label="통계" to="/*" component={Link} />
        <StyledTab value={2} label="마이" to="/*" component={Link} />
        {router && !router.pathname.includes('[[...app]]') && <NextNavBar />}
      </Tabs>
    </Box>
  );
};

// 넥스트 내비게이션바
function NextNavBar() {
  return (
    <>
      <StyledTab value={0} label="오늘" href="/" component={NextLink} />
      <StyledTab value={1} label="통계" href="/login" component={NextLink} />
      <StyledTab value={2} label="마이" href="/*" component={NextLink} />
    </>
  );
}

export default NavBar;
