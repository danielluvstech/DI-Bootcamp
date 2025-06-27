// app.js
const express = require('express');
const { fetchPosts } = require('./data/dataService');

const app = express();
const PORT = 5000;

app.use(express.json());

// GET /api/posts - Fetch posts from JSONPlaceholder via Axios
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log('Data successfully retrieved from JSONPlaceholder');
    res.json(posts);
  } catch (error) {
    console.error('Error retrieving data:', error.message);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// Optional test route
app.get('/', (req, res) => {
  res.send('CRUD API is running...');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

