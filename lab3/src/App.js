import './App.css';
import Ex0 from './Ex0';
import Ex01 from './Ex01';
import Ex02 from './Ex02';
import Ex04 from './Ex04';

import MyInput from './Ex3/MyInput';

function App() {
  return (
    <div>
          {/* <Ex0/>
          <Ex01/>
          <Ex02/>
          <Ex04/> */}
          <MyInput/>
    </div>
  );
}

export default App;

//--------------------------------------------------------------
//For exercise 2.1

// import * as React from 'react';

// export default function App() {
//   const [name] = React.useState('Adam');
//   const [age] = React.useState(35);

//   return (
//     <>
//       <p>My name is {name}</p>
//       <p>My age is {age}</p>
//     </>
//   );
// }
//--------------------------------------------------------------

//For exercise 2.2, 2.3
// import * as React from 'react';

// function App() {
//   const [name, setName] = React.useState('Adam');
//   const [age, setAge] = React.useState(35);

//   return (
//     <>
//       <section>
//         <input
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <p>My name is {name}</p>
//       </section>
//       <section>
//         <input
//           type="number"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//         />
//         <p>My age is {age}</p>
//       </section>
//     </>
//   );
// }

// export default App;
