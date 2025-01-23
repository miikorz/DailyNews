import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../components/NotFound';

describe('NotFound', () => {
  test('renders 404 page when navigating to a non-existing URL', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );

    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/Oops! The page you are looking for does not exist./i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Go Home/i })).toBeInTheDocument();
  });
});