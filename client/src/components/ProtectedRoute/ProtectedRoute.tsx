import { useAuth } from '../../context/useAuthContext';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface ProtectedRouteProps extends RouteProps {
  path: string;
  exact: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ ...rest }) => {
  const { loggedInUser } = useAuth();

  if (loggedInUser) return <Redirect to="/dashboard" />;
  return <Route {...rest} />;
};

export default ProtectedRoute;
