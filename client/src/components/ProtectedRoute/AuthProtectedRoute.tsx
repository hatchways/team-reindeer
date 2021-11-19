import { useAuth } from '../../context/useAuthContext';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface AuthProtectedRouteProps extends RouteProps {
  path: string;
  exact: boolean;
}

const AuthProtectedRoute: React.FC<AuthProtectedRouteProps> = ({ ...rest }) => {
  const { loggedInUser } = useAuth();

  if (loggedInUser) return <Redirect to="/dashboard" />;

  // if (loggedInUser !== null && loggedInUser !== undefined) return <Redirect to="/dashboard" />;
  return <Route {...rest} />;
};

export default AuthProtectedRoute;
