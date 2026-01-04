import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

import { useAuth, useLogout } from '@/entities/session/lib';
import { ProductRoute } from '@/shared/routes';

import { AuthButton } from './authButton.tsx';
import { MobileMenu } from './burgerMenu.tsx';
import { NavLinks } from './navLinks.tsx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout } = useLogout();
  const { isAuth } = useAuth();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="w-full">
      <div className={'container mx-auto p-5 flex h-16 justify-between items-center'}>
        <Link to={ProductRoute.to}>Home</Link>
        <nav className={'hidden md:flex'}>
          <NavLinks className={'flex items-center gap-6'} />
        </nav>
        <div className={'hidden md:block'}>
          <AuthButton isAuth={isAuth} logout={logout} />
        </div>

        <button
          className="md:hidden text-3xl"
          aria-expanded={isMenuOpen}
          aria-label="Open burger menu"
          onClick={toggleMenu}
        >
          <HiMenu />
        </button>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu}>
        <div className="flex items-center justify-between p-4 border-b">
          <Link to={ProductRoute.to} onClick={toggleMenu}>
            Home
          </Link>
          <button onClick={toggleMenu} className="text-3xl" aria-label="close burger menu">
            <HiX />
          </button>
        </div>

        <nav className="p-4 space-y-4 flex flex-col gap-2 items-center justify-between">
          <NavLinks className="flex flex-col gap-2 items-center m-0" onNavigate={toggleMenu} />

          <AuthButton isAuth={isAuth} logout={logout} onNavigate={toggleMenu} />
        </nav>
      </MobileMenu>
    </header>
  );
};

export default Header;
