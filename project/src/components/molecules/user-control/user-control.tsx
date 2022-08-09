import { AuthorizationStatus } from '../../../const';
import SignInBtn from '../../atoms/sing-in-btn/sing-in-btn';
import User from '../../atoms/user/user';

export default function UserControl({authorizationStatus}: {authorizationStatus: AuthorizationStatus}) {
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
