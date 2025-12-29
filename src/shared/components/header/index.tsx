import { Link } from '@tanstack/react-router';

import { useAuth, useLogout } from '@/entities/session/lib';
import { ButtonElement } from '@/shared/components/button';

const Header = () => {
  const { logout } = useLogout();
  const { isAuth } = useAuth();

  return (
    <header>
      <Link to={'/'}>Home</Link>
      <Link to={'/character'}>GraphQL</Link>
      <Link to={'/chat'}>Chat</Link>
      {isAuth ? <ButtonElement onClick={() => logout()}>Logout</ButtonElement> : <Link to={'/login'}>Login</Link>}
    </header>
  );
};

export default Header;
