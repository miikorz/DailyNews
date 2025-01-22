import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from '../context/ToastContext';
import useFeedManagement from '../customHooks/useFeedManagement';
import NewsDetail from '../components/NewsDetail';

// Mocking useFeedManagement hook
jest.mock('../customHooks/useFeedManagement');

// Mocking react-router-dom useParams hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1',
  }),
}));

// mock env variable import.meta.env.VITE_BACKEND_BASE_URI
import.meta.env.VITE_BACKEND_BASE_URI = 'test'
jest.mock('vite', () => ({
  ...jest.requireActual('vite'),
  'import.meta': {
    env: {
      VITE_BACKEND_BASE_URI: 'http://localhost:5000',
    },
  },
}));

// Mocking fetch API
beforeAll(() => {
  global.fetch = jest.fn();
});

const mockUseFeedManagement = useFeedManagement as jest.MockedFunction<
  typeof useFeedManagement
>;

describe('NewsDetail', () => {
  beforeEach(() => {
    mockUseFeedManagement.mockReturnValue({
      getFeedById: jest.fn(),
      feeds: [],
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
      loading: false,
      error: null,
    });
  });

  test('renders NewsDetail component', () => {
    render(
    //   <BrowserRouter>
    //     <ToastProvider>
          <NewsDetail />
    //     </ToastProvider>
    //   </BrowserRouter>
    );

    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/link/i)).toBeInTheDocument();
  });

  test('shows validation errors when submitting empty form', () => {
    render(
      <BrowserRouter>
        <ToastProvider>
          <NewsDetail />
        </ToastProvider>
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText(/create news/i));

    expect(screen.getByText(/title is required/i)).toBeInTheDocument();
    expect(screen.getByText(/link is required/i)).toBeInTheDocument();
  });

  test('calls updateFeed when form is submitted with valid data', () => {
    const mockUpdateFeed = jest.fn();
    mockUseFeedManagement.mockReturnValue({
      ...mockUseFeedManagement(),
      updateFeed: mockUpdateFeed,
      feedData: {
        _id: '1',
        title: 'Test Title',
        description: 'Test Description',
        author: 'Test Author',
        link: 'https://example.com',
        portrait: 'https://example.com/image.jpg',
        newsletter: 'Test Newsletter',
      },
    });

    render(
      <BrowserRouter>
        <ToastProvider>
          <NewsDetail />
        </ToastProvider>
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText(/update news/i));

    expect(mockUpdateFeed).toHaveBeenCalledWith('1', {
      _id: '1',
      title: 'Test Title',
      description: 'Test Description',
      author: 'Test Author',
      link: 'https://example.com',
      portrait: 'https://example.com/image.jpg',
      newsletter: 'Test Newsletter',
    });
  });
});
