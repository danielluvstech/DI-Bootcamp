const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const query = "hilarious";
const rating = "g";

const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&rating=${rating}&api_key=${apiKey}`;

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Giphy data:", data);
  })
  .catch((error) => {
    console.error("Error fetching Giphy data:", error);
  });