import { AuthorizationStatus } from '../../../const';
import { useAppSelector } from '../../../hooks/redux';
import { getAuthorizationStatus } from '../../../store/helpers';
import SignInBtn from '../../atoms/sing-in-btn/sing-in-btn';
import User from '../../atoms/user/user';

export default function UserControl() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const getUserControl = (status: AuthorizationStatus): JSX.Element => {
    if (status === AuthorizationStatus.NoAuth) {
      return <SignInBtn/>;
    }
    return <User/>;
  };

  return (
    <nav className="header__nav">
      {getUserControl(authorizationStatus)}
    </nav>
  );
}
