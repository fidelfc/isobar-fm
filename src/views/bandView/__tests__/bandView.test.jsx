import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BandView } from '../bandView';
import { it, expect } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
const queryClient = new QueryClient();

it('renders the band info', async () => {
  render(
    <MemoryRouter initialEntries={['/band/001']}>
      <QueryClientProvider client={queryClient}>
        <BandView />
      </QueryClientProvider>
    </MemoryRouter>
  );
  expect(screen.getByTestId('loader')).toBeTruthy();
  await waitFor(() => screen.getByText('rock'));
  expect(screen.getByText(/9001/)).toBeDefined();
  expect(screen.getByText('A biography')).toBeDefined();
  expect(screen.queryAllByTestId('album')).toHaveLength(2);
});
