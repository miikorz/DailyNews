import mongoose, { Schema } from 'mongoose';

const FeedSchema = new Schema({
  title: String,
  description: {
    type: String,
    default: '',
    required: false,
  },
  author: {
    type: String,
    default: '',
    required: false,
  },
  link: String,
  portrait: {
    type: String,
    default: '',
    required: false,
  },
  newsletter: {
    type: String,
    default: '',
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const FeedODMModel = mongoose.model('Feed', FeedSchema);
