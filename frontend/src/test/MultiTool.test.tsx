import React from 'react';
import { render, fireEvent, queryByAttribute } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MultiTool from '../ui/MultiTool';

describe('MultiTool', () => {
const getById = queryByAttribute.bind(null, 'id');

  test('renders MultiTool component', () => {
    const { container } = render(
      <BrowserRouter>
        <MultiTool />
      </BrowserRouter>
    );

    const addButton = getById(container, 'add-button');
    const darkModeButton = getById(container, 'dark-mode-button');
    expect(addButton).toBeInTheDocument();
    expect(darkModeButton).toBeInTheDocument();
  });

  test('toggles dark mode on dark mode button click', () => {
    const { container } = render(
      <BrowserRouter>
        <MultiTool />
      </BrowserRouter>
    );

    const darkModeButton = getById(container, 'dark-mode-button');

    if (darkModeButton) {
      fireEvent.click(darkModeButton);
      expect(document.body.classList.contains('dark')).toBe(true);
  
      fireEvent.click(darkModeButton);
      expect(document.body.classList.contains('dark')).toBe(false);
    }
  });

  test('navigates to add page on add new click', () => {
    const { container } = render(
      <BrowserRouter>
        <MultiTool />
      </BrowserRouter>
    );

    const addButton = getById(container, 'add-button');

    if (addButton) {
        fireEvent.click(addButton);
        expect(window.location.pathname).toBe('/add');
    }
  });
});