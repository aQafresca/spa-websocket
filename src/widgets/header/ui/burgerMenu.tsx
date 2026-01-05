import { type ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const MobileMenu = ({ isOpen, onClose, children }: MobileMenuProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return createPortal(
    <>
      <div
        className={`
          fixed inset-0 bg-black/50 transition-opacity duration-300
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={onClose}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label={'burger menu'}
        className={`
          fixed top-0 right-0 h-full w-full xs:w-[85vw] sm:max-w-[400px] bg-dark shadow-xl
          transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {children}
      </aside>
    </>,
    document.body,
  );
};
