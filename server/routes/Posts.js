import express from 'express';
import { getPostes,  createPost } from '../controlers/Posts.js';

const router = express.Router();

router.get ('/', getPostes);
router.post ('/', createPost);
export default router