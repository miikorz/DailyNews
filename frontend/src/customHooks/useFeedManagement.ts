import { useState } from 'react';
import { Feed } from '../utils/interfaces/Feed';
import { ToastType, useToast } from '../context/ToastContext';
import { useNavigate } from 'react-router-dom';
import { apiEndpoints } from '../utils/apiConstants';

const useFeedManagement = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const [feedData, setFeedData] = useState<Feed>({
    _id: null,
    title: '',
    description: '',
    author: '',
    link: '',
    portrait: '',
    newsletter: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getAllFeeds = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiEndpoints.getAllFeeds);
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      const { data } = await response.json();
      setFeeds(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const createFeed = async (feed: Feed) => {
    setLoading(true);
    try {
      const response = await fetch(apiEndpoints.createFeed, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feed),
      });
      if (!response.ok) {
        throw new Error('Failed to create feed');
      }
      await response.json();
      addToast('New created successfully', ToastType.SUCCESS);
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (err) {
      setError((err as Error).message);
      addToast('New could not be created', ToastType.ERROR);
    } finally {
      setLoading(false);
    }
  };

  const getFeedById = async (id: string) => {
    setLoading(true);
    try {
      const response = await fetch(apiEndpoints.getFeedById(id));
      if (!response.ok) {
        throw new Error('Failed to fetch new');
      }
      const { data } = await response.json();
      setFeedData(data);
    } catch (err) {
      setError((err as Error).message);
      addToast('New could not be loaded', ToastType.ERROR);
    } finally {
      setLoading(false);
    }
  };

  const updateFeed = async (id: string, updatedFeed: Partial<Feed>) => {
    setLoading(true);
    try {
      const response = await fetch(apiEndpoints.updateFeed(id), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: updatedFeed.title,
          description: updatedFeed.description,
          author: updatedFeed.author,
          link: updatedFeed.link,
          portrait: updatedFeed.portrait,
          newsletter: updatedFeed.newsletter,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update new');
      }
      addToast('New updated successfully', ToastType.SUCCESS);
    } catch (err) {
      setError((err as Error).message);
      addToast('New could not be updated', ToastType.ERROR);
    } finally {
      setLoading(false);
    }
  };

  const deleteFeed = async (id: string) => {
    setLoading(true);
    try {
      const response = await fetch(apiEndpoints.deleteFeed(id), {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete new');
      }
      addToast('Feed deleted successfully', ToastType.SUCCESS);
      setFeeds(feeds.filter((feed) => feed._id !== id));
    } catch (err) {
      setError((err as Error).message);
      addToast('New could not be deleted', ToastType.ERROR);
    } finally {
      setLoading(false);
    }
  };

  const searchFeedsByTitle = async (searchValue: string | null) => {
    if (searchValue === null) return;

    setLoading(true);

    try {
      const response = await fetch(apiEndpoints.searchFeedsByTitle, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchValue }),
      });
      if (!response.ok) {
        throw new Error('Failed to find news');
      }
      const { data } = await response.json();
      setFeeds(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

    // useEffect(() => {
    //   // TODO: fix the double triggering of the useEffect
    //   getAllFeeds();
    // }, []);

  return {
    feeds,
    feedData,
    setFeedData,
    loading,
    error,
    getAllFeeds,
    createFeed,
    getFeedById,
    updateFeed,
    deleteFeed,
    searchFeedsByTitle,
  };
};

export default useFeedManagement;
