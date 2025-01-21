import { Router } from 'express';
import {
  getAllFeeds,
  getFeed,
  createFeed,
  updateFeed,
  deleteFeed,
  searchFeedsByTitle,
} from './controllers/feedController';

const router = Router();

/**
 * @route GET /feed/:id
 * @desc Get a feed by its id
 * @returns {object} 200 - An object with the feed data
 * @returns {object} 404 - An object with the error message
 * @returns {object} 500 - An object with the error message
 */
router.get('/feed/:id', getFeed);

/**
 * @route GET /feed
 * @desc Get all feeds
 * @returns {object} 200 - An object with the feed data storing an array of feeds
 * @returns {object} 500 - An object with the error message
 */
router.get('/feed', getAllFeeds);
// TODO: add test for search?
/**
 * @route GET /feed
 * @desc Get all feeds
 * @returns {object} 200 - An object with the feed data storing an array of feeds filtered by title
 * @returns {object} 500 - An object with the error message
 */
router.post('/feed/search', searchFeedsByTitle);

/**
 * @route POST /feed
 * @desc Create a feed
 * @returns {object} 200 - An object with the feed data
 * @returns {object} 500 - An object with the error message
 */
router.post('/feed', createFeed);

/**
 * @route PUT /feed/:id
 * @desc Update a feed by its id
 * @returns {object} 200 - An object with the feed data
 * @returns {object} 404 - An object with the error message
 * @returns {object} 500 - An object with the error message
 */
router.put('/feed/:id', updateFeed);

/**
 * @route DELETE /feed/:id
 * @desc Delete a feed by its id
 * @returns {object} 204
 * @returns {object} 404 - An object with the error message
 * @returns {object} 500 - An object with the error message
 */
router.delete('/feed/:id', deleteFeed);

export default router;
