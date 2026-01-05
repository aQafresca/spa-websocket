import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { ButtonElement } from '@/shared/components/button';

describe('ButtonElement', () => {
  describe('Rendering', () => {
    it('should match snapshot', () => {
      const { asFragment } = render(<ButtonElement>Click</ButtonElement>);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should render children correctly', () => {
      render(<ButtonElement>Submit</ButtonElement>);
      expect(screen.getByText('Submit')).toBeInTheDocument();
    });
  });

  describe('Styles and Variants', () => {
    it('should apply large size classes', () => {
      render(<ButtonElement size="large">Large</ButtonElement>);
      const button = screen.getByRole('button');

      expect(button).toHaveClass('px-6', 'py-3', 'text-lg');
    });

    it('should apply outline variant classes', () => {
      render(<ButtonElement variant="outline">Outline</ButtonElement>);
      const button = screen.getByRole('button');

      expect(button).toHaveClass('bg-transparent', 'border');
    });
  });

  describe('Interactions', () => {
    it('should trigger onClick when enabled', () => {
      const handleClick = vi.fn();

      render(<ButtonElement onClick={handleClick}>Click</ButtonElement>);
      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should be disabled and not clickable', () => {
      const handleClick = vi.fn();

      render(
        <ButtonElement disabled onClick={handleClick}>
          Disabled
        </ButtonElement>,
      );

      const button = screen.getByRole('button');

      expect(button).toBeDisabled();

      fireEvent.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });
});
