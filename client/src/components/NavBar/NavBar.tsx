import { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import useStyles from './useStyles';
import logo from '../../Images/logo.png';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useLocation } from 'react-router-dom';
import LoggedInBar from './AuthBars/LoggedInBar';
import LoggedOutBar from './AuthBars/LoggedOutBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { CircularProgress } from '@material-ui/core';

const NavBar = (): JSX.Element => {
  const classes = useStyles();
  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();
  const { pathname } = useLocation();
  useEffect(() => {
    initSocket();
  }, [initSocket]);

  if (loggedInUser === undefined) return <CircularProgress />;

  return (
    <AppBar className={pathname === '/' ? classes.homeAppbar : classes.appbar} position="absolute">
      <CssBaseline />
      <ToolBar className={pathname === '/' ? classes.homeToolbar : classes.toolbar}>
        <img src={logo} alt="logo" />
        {loggedInUser ? <LoggedInBar /> : <LoggedOutBar />}
      </ToolBar>
    </AppBar>
  );
};

export default NavBar;
