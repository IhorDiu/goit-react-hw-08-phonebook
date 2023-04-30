import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut())

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}. {user.email}</p>
      <Button type="button" variant="contained" onClick={handleLogOut}>
        Logout
      </Button>
    </div>
  );
};
