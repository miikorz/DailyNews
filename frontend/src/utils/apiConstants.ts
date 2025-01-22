const baseUrl = import.meta.env.VITE_BACKEND_BASE_URI;

export const apiEndpoints = {
  getAllFeeds: baseUrl,
  createFeed: baseUrl,
  searchFeedsByTitle: `${baseUrl}/search`,
  getFeedById: (id: string) => `${baseUrl}/${id}`,
  updateFeed: (id: string) => `${baseUrl}/${id}`,
  deleteFeed: (id: string) => `${baseUrl}/${id}`,
};
