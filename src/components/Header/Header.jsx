import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Box, AppBar, Container, Toolbar } from '@mui/material';



// import css from './AppBar.module.css';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <Container fixed>
        <Toolbar disableGutters>
          <Navigation sx={{ flexGrow: 1 }} />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBar>
    </Box>
  );
};
