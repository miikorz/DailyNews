// const baseUrl = import.meta.env.VITE_BACKEND_BASE_URI;
const baseUrl = 'http://localhost:3001/feed';

export const apiEndpoints = {
  getAllFeeds: baseUrl,
  createFeed: baseUrl,
  searchFeedsByTitle: `${baseUrl}/search`,
  getFeedById: (id: string) => `${baseUrl}/${id}`,
  updateFeed: (id: string) => `${baseUrl}/${id}`,
  deleteFeed: (id: string) => `${baseUrl}/${id}`,
};
