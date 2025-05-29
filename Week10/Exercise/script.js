const robots = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: 'https://robohash.org/daniellewin9@gmail.com ?set=set2'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    image: 'https://robohash.org/2?200x200'
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    image: 'https://robohash.org/africa ?set=set3'
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    image: 'https://robohash.org/africa ?set=set4'
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    image: 'https://robohash.org/mad about you ?set=set5'
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    image: 'https://robohash.org/6?200x200'
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    image: 'https://robohash.org/7?200x200'
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    image: 'https://robohash.org/hipster ?set=set6'
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    image:'https://robohash.org/dandantigerblitz'
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    image:'https://robohash.org/dinosaur'
  }
];

const robotContainer = document.getElementById('robot-container');
const searchBox = document.getElementById('searchBar');

// Function to create one robot card using DOM elements
function createRobotCard(robot) {
  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  img.src = robot.image;
  img.alt = `${robot.name} image`;

  const name = document.createElement('h2');
  name.textContent = robot.name;

  const email = document.createElement('p');
  email.textContent = robot.email;

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(email);

  return card;
}

// Function to display all robots
function displayRobots(robotsList) {
  robotContainer.innerHTML = '';
  robotsList.forEach(robot => {
    const card = createRobotCard(robot);
    robotContainer.appendChild(card);
  });
}

// Initial display of all robots
displayRobots(robots);

// Filter robots on search input
searchBox.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchTerm)
  );
  displayRobots(filteredRobots);
});
