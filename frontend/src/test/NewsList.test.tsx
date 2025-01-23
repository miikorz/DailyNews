import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from '../context/ToastContext';
import useFeedManagement from '../customHooks/useFeedManagement';
import NewsList from '../components/NewsList';

// Mock the useFeedManagement hook
jest.mock('../customHooks/useFeedManagement');

const mockUseFeedManagement = useFeedManagement as jest.MockedFunction<typeof useFeedManagement>;

describe('NewsList', () => {
  beforeEach(() => {
    mockUseFeedManagement.mockReturnValue({
      getFeedById: jest.fn(),
      feedData: {
        _id: null,
        title: '',
        description: '',
        author: '',
        link: '',
        portrait: '',
        newsletter: '',
      },
      setFeedData: jest.fn(),
      updateFeed: jest.fn(),
      createFeed: jest.fn(),
      deleteFeed: jest.fn(),
      getAllFeeds: jest.fn(),
      searchFeedsByTitle: jest.fn(),
      feeds: [
        {
          _id: '1',
          title: 'Test Title 1',
          description: 'Test Description 1',
          author: 'Test Author 1',
          link: 'https://example.com/1',
          portrait: 'https://example.com/image1.jpg',
          newsletter: 'Test Newsletter 1',
        },
        {
          _id: '2',
          title: 'Test Title 2',
          description: 'Test Description 2',
          author: 'Test Author 2',
          link: 'https://example.com/2',
          portrait: 'https://example.com/image2.jpg',
          newsletter: 'Test Newsletter 2',
        },
      ],
      loading: false,
      error: null,
    });
  });

  test('renders NewsList component', () => {
    render(
      <BrowserRouter>
        <ToastProvider>
          <NewsList />
        </ToastProvider>
      </BrowserRouter>
    );

    expect(screen.getByText(/Test Title 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Description 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Author 1/i)).toBeInTheDocument();

    expect(screen.getByText(/Test Title 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Description 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Author 2/i)).toBeInTheDocument();
  });

  test('renders links with correct href', () => {
    render(
      <BrowserRouter>
        <ToastProvider>
            <NewsList />
        </ToastProvider>
      </BrowserRouter>
    );

    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', 'https://example.com/1');
    expect(links[1]).toHaveAttribute('href', 'https://example.com/2');
  });

  test('renders images with correct src', () => {
    render(
      <BrowserRouter>
        <ToastProvider>
            <NewsList />
        </ToastProvider>
      </BrowserRouter>
    );

    const images = screen.getAllByRole('img');
    expect(images[0]).toHaveAttribute('src', 'https://example.com/image1.jpg');
    expect(images[1]).toHaveAttribute('src', 'https://example.com/image2.jpg');
  });

  test('shows delete notification toast when delete button is clicked', () => {
    render(
      <BrowserRouter>
        <ToastProvider>
            <NewsList />
        </ToastProvider>
      </BrowserRouter>
    );

    const deleteButtons = screen.getAllByText(/delete/i);
    deleteButtons.forEach((button) => {
      button.click();
      expect(screen.getByText(/News deleted/i)).toBeInTheDocument();
    });
  });
});