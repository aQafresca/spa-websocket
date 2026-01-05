import { createRootRoute, createRouter, RouterProvider } from '@tanstack/react-router';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { useAuth, useLogout } from '@/entities/session/lib';
import { mockUser } from '@/shared/api/mocks';

import Header from './header';

vi.mock('@/entities/session/lib', () => ({
  useAuth: vi.fn(),
  useLogout: vi.fn(),
}));

const mockedUseAuth = vi.mocked(useAuth);
const mockedUseLogout = vi.mocked(useLogout);

const rootRoute = createRootRoute({ component: Header });
const router = createRouter({ routeTree: rootRoute });

const renderHeader = async () => {
  let result;

  await act(async () => {
    await router.load();
    result = render(<RouterProvider router={router} />);
  });

  return result;
};

describe('Header Component', () => {
  const mockLogout = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    mockedUseLogout.mockReturnValue({ logout: mockLogout });
  });

  it('renders home link and navigation', async () => {
    mockedUseAuth.mockReturnValue({ isAuth: false, user: { ...mockUser } });
    await renderHeader();

    const homeLinks = await screen.findAllByText(/home/i);

    expect(homeLinks[0]).toBeInTheDocument();

    const navigations = screen.getAllByRole('navigation');

    expect(navigations.length).toBeGreaterThan(0);
    expect(navigations[0]).toBeInTheDocument();
  });

  it('toggles mobile menu when burger button is clicked', async () => {
    const user = userEvent.setup({ delay: null });

    mockedUseAuth.mockReturnValue({ isAuth: false, user: { ...mockUser } });
    await renderHeader();

    const burgerBtn = await screen.findByLabelText(/open burger menu/i);

    await user.click(burgerBtn);

    expect(await screen.findByLabelText(/close burger menu/i)).toBeInTheDocument();
  });

  it('shows logout button when authenticated', async () => {
    mockedUseAuth.mockReturnValue({ isAuth: true, user: { ...mockUser } });
    await renderHeader();

    const logoutBtn = screen.getAllByText(/logout/i)[0];

    expect(logoutBtn).toBeInTheDocument();
  });
});
