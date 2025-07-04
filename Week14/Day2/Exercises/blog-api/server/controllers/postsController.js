const Post = require('../models/postsModel');

exports.getAll = async (req, res) => {
  const posts = await Post.getAllPosts();
  res.json(posts);
};

exports.getOne = async (req, res) => {
  const post = await Post.getPostById(req.params.id);
  post ? res.json(post) : res.status(404).json({ error: 'Post not found' });
};

exports.create = async (req, res) => {
  const { title, content } = req.body;
  const [newPost] = await Post.createPost({ title, content });
  res.status(201).json(newPost);
};

exports.update = async (req, res) => {
  const { title, content } = req.body;
  const [updatedPost] = await Post.updatePost(req.params.id, { title, content });
  updatedPost ? res.json(updatedPost) : res.status(404).json({ error: 'Post not found' });
};

exports.remove = async (req, res) => {
  const deleted = await Post.deletePost(req.params.id);
  deleted ? res.json({ message: 'Deleted' }) : res.status(404).json({ error: 'Post not found' });
};
