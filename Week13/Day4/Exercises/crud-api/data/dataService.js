const axios = require('axios');

// Function to fetch all posts from JSONPlaceholder
const fetchPosts = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data; // Return the array of posts
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    throw error;
  }
};

module.exports = {
  fetchPosts
};