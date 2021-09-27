import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import DrawerFeed from '@components/drawer-feed';
import BirdCountButtonGroup from '@components/bird-count-buttongroup';
import SimpleSnackbar from '@components/snackbar';
import MainAppBar from '@components/main-appbar';
import Alert from '@mui/material/Alert';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'copyright © '}
      <Link
        color="inherit"
        target="_blank"
        href="https://github.com/aviculturist/bird-count/graphs/contributors"
      >
        the contributors
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function BirdCount(): JSX.Element {
  return (
    <>
      <MainAppBar />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              BirdCount makes it easy to count all the birds
            </Typography>
            <Alert severity="warning">EXTREME ALPHA SOFTWARE: USE AT YOUR OWN RISK</Alert>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              .
            </Typography>
            <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
              <BirdCountButtonGroup />
              <SimpleSnackbar />
            </Stack>
          </Container>
        </Box>
        <DrawerFeed />
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          This is the gutterBottom.
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          created with <FavoriteIcon /> and
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </>
  );
}
