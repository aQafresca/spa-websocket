import { Link } from '@tanstack/react-router';

import { NAV_LINKS } from '@/shared/constants';

type Props = {
  onNavigate?: () => void;
  className?: string;
};

export const NavLinks = ({ onNavigate, className }: Props) => {
  return (
    <ul className={className}>
      {NAV_LINKS.map((link) => (
        <li className={'hover:text-accent transition-colors'} key={link.to}>
          <Link to={link.to} onClick={onNavigate}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
