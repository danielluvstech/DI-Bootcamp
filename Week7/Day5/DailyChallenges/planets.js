const planets = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "orange", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "brown", moons: 79 },
    { name: "Saturn", color: "goldenrod", moons: 83 },
    { name: "Uranus", color: "lightblue", moons: 27 },
    { name: "Neptune", color: "darkblue", moons: 14 }
  ];
  
  const section = document.querySelector(".listPlanets");
  
  planets.forEach(planet => {
    // Create the planet
    const planetDiv = document.createElement("div");
    planetDiv.classList.add("planet");
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.textContent = planet.name;
  
    // Add moons
    for (let i = 0; i < planet.moons; i++) {
      const moon = document.createElement("div");
      moon.classList.add("moon");
      // Spread out moons
      moon.style.left = `${(i + 1) * 20}px`;
      moon.style.top = `${Math.random() * 60}px`;
      planetDiv.appendChild(moon);
    }
  
    section.appendChild(planetDiv);
  });