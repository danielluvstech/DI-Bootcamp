const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Simulated database
let posts = [
  { id: 1, title: "First Post", content: "This is the first blog post" },
  { id: 2, title: "Second Post", content: "This is another blog post" }
];

// Routes

// GET all posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

// GET single post by ID
app.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ error: "Post not found" });
  res.json(post);
});

// POST create a new post
app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: "Title and content required" });
  }

  const newPost = {
    id: posts.length ? posts[posts.length - 1].id + 1 : 1,
    title,
    content
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT update a post
app.put('/posts/:id', (req, res) => {
  const { title, content } = req.body;
  const post = posts.find(p => p.id === parseInt(req.params.id));

  if (!post) return res.status(404).json({ error: "Post not found" });

  post.title = title || post.title;
  post.content = content || post.content;

  res.json(post);
});

// DELETE a post
app.delete('/posts/:id', (req, res) => {
  const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (postIndex === -1) return res.status(404).json({ error: "Post not found" });

  posts.splice(postIndex, 1);
  res.json({ message: "Post deleted successfully" });
});

// Error handling for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});