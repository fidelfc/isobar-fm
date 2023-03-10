import React from 'react';
import ReactDOM from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { SearchView } from './views/SearchView/searchView';
import { Reset } from 'styled-reset';
import { BandView } from './views/bandView/bandView';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  
  html{
    font-size: 10px;
  }
`;
const queryClient = new QueryClient();
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={'/'}>
      <Route index element={<SearchView />} />
      <Route path={'/band/:bandId'} element={<BandView />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
