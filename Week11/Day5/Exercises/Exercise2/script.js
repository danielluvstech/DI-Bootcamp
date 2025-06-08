const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const term = "sun";
const limit = 10;
const offset = 1;

const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${term}&limit=${limit}&offset=${offset}&rating=g&api_key=${apiKey}`;

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Giphy Sun Search Data:", data);
  })
  .catch((error) => {
    console.error("Error fetching Giphy data:", error);
  });
