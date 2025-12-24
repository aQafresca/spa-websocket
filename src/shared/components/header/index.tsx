import { Link } from '@tanstack/react-router';

const Header = () => {
  return (
    <header>
      <Link to={'/'}>Home</Link>
      <Link to={'/graphql'}>GraphQL</Link>
      <Link to={'/chat'}>Chat</Link>
      <Link to={'/login'}>Login</Link>
    </header>
  );
};

export default Header;
