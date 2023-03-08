import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { SearchView } from '../searchView';
import { it, expect } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
});

it('renders the view after loading', async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={['/']}>
        <SearchView />
      </MemoryRouter>
    </QueryClientProvider>
  );

  expect(screen.getByTestId('loader')).toBeTruthy();
  await waitFor(() => screen.queryByText(/Test band/));
  expect(screen.queryByText(/Test band/)).toBeDefined();
});

it('Filter using the search', async () => {
  const user = userEvent.setup();
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={['/']}>
        <SearchView />
      </MemoryRouter>
    </QueryClientProvider>
  );

  await waitFor(() => screen.getByTestId('search-input'));
  await user.click(screen.getByTestId('search-input'));
  await user.keyboard('2');
  await user.click(screen.getByTestId('search-button'));
  await waitFor(() => expect(screen.queryByText(/Test band 2/)).toBeDefined());
  await waitFor(() => expect(screen.queryByText(/Test band 1/)).toBeNull());
});
