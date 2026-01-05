import { Link } from '@tanstack/react-router';

import { ButtonElement } from '@/shared/components/button';
import { LoginRoute } from '@/shared/routes';

type AuthButtonProps = {
  onNavigate?: () => void;
  className?: string;
  isAuth: boolean;
  logout: () => void;
};

export const AuthButton = ({ onNavigate, className, isAuth, logout }: AuthButtonProps) => {
  const handleLogout = () => {
    logout();
    onNavigate?.();
  };

  if (isAuth) {
    return (
      <ButtonElement variant="outline" className={className} onClick={handleLogout}>
        Logout
      </ButtonElement>
    );
  }

  return (
    <Link to={LoginRoute.to} onClick={onNavigate} className={className}>
      Login
    </Link>
  );
};
