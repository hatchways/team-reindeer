import { useAuth } from '../../context/useAuthContext';
import { Redirect, Route, RouteProps } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ProtectedRouteProps extends RouteProps {}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ ...rest }) => {
  const { loggedInUser } = useAuth();

  if (!loggedInUser && loggedInUser === undefined) return <Redirect to="/login" />;
  return <Route {...rest} />;
};

export default ProtectedRoute;
