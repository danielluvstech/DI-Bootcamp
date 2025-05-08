const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

    // Get the section element
    const section = document.querySelector(".listPlanets");

    // Loop through the planets and create a div for each
    planets.forEach(planet => {
        const planetDiv = document.createElement("div");
        planetDiv.classList.add("planet", planet.toLowerCase());
        planetDiv.textContent = planet;
        section.appendChild(planetDiv);
    });