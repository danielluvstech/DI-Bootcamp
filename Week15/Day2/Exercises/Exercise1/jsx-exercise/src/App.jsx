// function App() {
//   const myelement = <h1>I Love JSX!</h1>;
//   const sum = 5 + 5;

//   return (
//     <div>
//       <p>Hello World!</p>
//       {myelement}
//       <p>React is {sum} times better with JSX</p>
//     </div>
//   );
// }

// export default App;

// import UserFavoriteAnimals from './UserFavoriteAnimals';

// function App() {
//   const user = {
//     firstName: 'Bob',
//     lastName: 'Dylan',
//     favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
//   };

//   return (
//     <div>
//       <h3>{user.firstName}</h3>
//       <h3>{user.lastName}</h3>
//       <UserFavoriteAnimals favAnimals={user.favAnimals} />
//     </div>
//   );
// }

// export default App;

import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise from './exercise3';

function App() {
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
  };

  return (
    <div>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
      <hr />
      <Exercise />
    </div>
  );
}

export default App;

