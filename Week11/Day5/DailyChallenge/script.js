const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const form = document.getElementById("gifForm");
const input = document.getElementById("gifInput");
const gifContainer = document.getElementById("gifContainer");
const deleteAllBtn = document.getElementById("deleteAll");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = input.value.trim();
  if (!query) return;

  try {
    const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${query}`);
    const data = await res.json();

    const gifUrl = data.data?.images?.fixed_height?.url;
    if (gifUrl) {
      const gifCard = document.createElement("div");
      gifCard.className = "gifCard";

      const img = document.createElement("img");
      img.src = gifUrl;
      img.alt = query;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "DELETE";
      deleteBtn.addEventListener("click", () => {
        gifCard.remove();
      });

      gifCard.appendChild(img);
      gifCard.appendChild(deleteBtn);
      gifContainer.appendChild(gifCard);
    } else {
      alert("No GIF found for that category.");
    }
  } catch (error) {
    console.error("Error fetching GIF:", error);
    alert("Something went wrong while fetching the GIF.");
  }

  input.value = "";
});

deleteAllBtn.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});
