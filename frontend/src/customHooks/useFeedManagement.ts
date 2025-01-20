import { useState } from 'react';
import { Feed } from '../interfaces/Feed';

const useFeedManagement = () => {
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

  const baseUrl = 'http://localhost:3001/feed';

  const getAllFeeds = async () => {
    setLoading(true);
    try {
      const request = await fetch(baseUrl);
      if (!request.ok) {
        throw new Error('Failed to fetch feeds');
      }
      const response = await request.json();
      setFeeds(response.data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const createFeed = async (feed: Feed) => {
    setLoading(true);
    try {
      const response = await fetch(baseUrl, {
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
      location.href = '/';
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const getFeedById = async (id: string) => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch feed');
      }
      const { data } = await response.json();
      setFeedData(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const updateFeed = async (id: string, updatedFeed: Partial<Feed>) => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}/${id}`, {
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
        throw new Error('Failed to update feed');
      }

      const data = await response.json();
      setFeeds(feeds.map((feed) => (feed._id === id ? data : feed)));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const deleteFeed = async (id: string) => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete feed');
      }
      setFeeds(feeds.filter((feed) => feed._id !== id));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  //   useEffect(() => {
  //     // TODO: fix the double triggering of the useEffect
  //     getAllFeeds();
  //   }, []);

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
  };
};

export default useFeedManagement;
