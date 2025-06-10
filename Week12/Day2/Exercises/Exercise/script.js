// Retrieve DOM elements
const nameEl = document.getElementById('name');
const heightEl = document.getElementById('height');
const genderEl = document.getElementById('gender');
const birthYearEl = document.getElementById('birthYear');
const homeWorldEl = document.getElementById('homeWorld');
const button = document.getElementById('button');
const loading = document.getElementById('loading');

// Function to fetch data from the API
async function getCharacterData() {
    try {
        // Clear current character info and show only loading
        nameEl.textContent = '';
        heightEl.textContent = '';
        genderEl.textContent = '';
        birthYearEl.textContent = '';
        homeWorldEl.textContent = '';
        loading.style.display = 'block';

        const randomId = Math.floor(Math.random() * 83) + 1; // Characters are 1-83
        const response = await fetch(`https://www.swapi.tech/api/people/${randomId}`);
        if (!response.ok) throw new Error('Character not found');
        const data = await response.json();
        const character = data.result.properties;

        // Fetch homeworld data
        const homeworldResponse = await fetch(character.homeworld);
        if (!homeworldResponse.ok) throw new Error('Homeworld not found');
        const homeworldData = await homeworldResponse.json();
        const homeworldName = homeworldData.result.properties.name;

        // Display new character info
        displayCharacter({
            name: character.name,
            height: character.height,
            gender: character.gender,
            birthYear: character.birth_year,
            homeWorld: homeworldName
        });
    } catch (error) {
        console.error("Error fetching character:", error);
        nameEl.textContent = "Oh No! That person isn't available.";
        heightEl.textContent = "";
        genderEl.textContent = "";
        birthYearEl.textContent = "";
        homeWorldEl.textContent = "";
        loading.style.display = 'none';
    }
}

// Display character info on the DOM
function displayCharacter(char) {
    nameEl.textContent = char.name;
    heightEl.textContent = `Height: ${char.height}`;
    genderEl.textContent = `Gender: ${char.gender}`;
    birthYearEl.textContent = `Birth Year: ${char.birthYear}`;
    homeWorldEl.textContent = `Home World: ${char.homeWorld}`;
    loading.style.display = 'none'; // Hide loading after data is displayed
}

// Add event listener to the button
button.addEventListener('click', getCharacterData);