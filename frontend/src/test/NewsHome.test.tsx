import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from '../context/ToastContext';
import useFeedManagement from '../customHooks/useFeedManagement';
import NewsHome from '../components/NewsHome';

// Mock the useFeedManagement hook
jest.mock('../customHooks/useFeedManagement');

const mockUseFeedManagement = useFeedManagement as jest.MockedFunction<typeof useFeedManagement>;

describe('NewsHome', () => {
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
      feeds: [],
      loading: false,
      error: null,
    });
  });

  test('renders NewsHome component', () => {
    render(
      <BrowserRouter>
        <ToastProvider>
            <NewsHome />
        </ToastProvider>
      </BrowserRouter>
    );

    expect(screen.getByText(/Welcome to your main feed of news/i)).toBeInTheDocument();
    expect(screen.getByText(/Stop wasting time searching for news. Get all the news you need in one!/i)).toBeInTheDocument();
  });

  test('renders NewsletterList component', () => {
    render(
      <BrowserRouter>
        <ToastProvider>
            <NewsHome />   
        </ToastProvider>
      </BrowserRouter>
    );

    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});