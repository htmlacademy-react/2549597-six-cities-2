import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
// import { AuthStatus } from '../../types/models';
import { useAppSelector } from '../../hooks';
import { getCurrentAuth } from '../../store/reducer';

type PrivateRouteProps = {
  children: JSX.Element;
}

export default function PrivateRoute(props: PrivateRouteProps) {
  const {children} = props;
  const loggedStatus = useAppSelector(getCurrentAuth);

  return (
    loggedStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
