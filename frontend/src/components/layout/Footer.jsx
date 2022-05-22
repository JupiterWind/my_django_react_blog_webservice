import { Container, Typography } from '@mui/material';
const Footer = () => {
  return (
    <Container maxWidth="xs" style={{ marginTop: '8%' }}>
      <Typography>
        <a target="_blank" href="https://icons8.com/icon/42814/집">
          집
        </a>{' '}
        icon by{' '}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </Typography>
    </Container>
  );
};

export default Footer;
