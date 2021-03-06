import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import NavBar from './components/NavBar/NavBar';
import EditMenu from './components/EditProfile/EditMenu';
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';
import Bookings from './pages/Bookings/Bookings';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { BookingProvider } from './context/useBookingContext';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import './App.css';
import Homepage from './pages/Home/Homepage';

function App(): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackBarProvider>
          <AuthProvider>
            <SocketProvider>
              <NavBar />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Switch>
                  <Route exact path="/" component={Homepage} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={Signup} />
                  <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                  <BookingProvider>
                    <ProtectedRoute exact path="/bookings" component={Bookings} />
                  </BookingProvider>
                  <ProtectedRoute exact path="/messages" component={Dashboard} />
                  <ProtectedRoute exact path="/my-sitters" component={Dashboard} />
                  <ProtectedRoute exact path="/edit-profile" component={EditMenu} />
                  <Route path="*">
                    <Redirect to="/" />
                  </Route>
                </Switch>
              </LocalizationProvider>
            </SocketProvider>
          </AuthProvider>
        </SnackBarProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
