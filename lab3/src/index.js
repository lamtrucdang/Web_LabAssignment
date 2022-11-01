import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import MySection from './MySection';
import MyButton from './MyButton';

import MyComponent from './Ex1/Ex1';

import MyButton1 from './Ex1/Ex1-2';
import MyList from './Ex1/MyList';

import MyButton2 from './Ex1/Ex1-3';

import AlertButton from './Ex4/Ex4-2';


// const root = ReactDOM.createRoot(document.getElementById('root'));

// const appState = {
//   text: "My Button",
//   disabled: true,
//   items: ["First", "Second", "Third"],
// };

// function render1(props){
//   root.render(
//     <main>
//       <MyButton1 text={props.text} disabled={props.disabled} />
//       <MyList items={props.items} />
//     </main>
//   );
// }

// render(appState);

// setTimeout(() => {
//   appState.disabled = false;
//   appState.items.push("Fourth");
  
//   render(appState);
// }, 1000);

// function render2({ second }) {
//   root.render(
//     <main>
//       <MyButton2 />
//       <MyButton2 text={second.text} disabled={second.disabled} />
//     </main>
//   );
// }

// render({
//   second: {
//     text: "Second Button",
//     disabled: true,
//   },
// });

// root.render( 
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>
  // <MySection>
  //   <MyButton>My Button Text</MyButton>
  // </MySection>
  // <MyComponent/>
// );

//----------------
//For exercise 4.1
// const element = (
//   <div style={{textAlign: "center", backgroundColor: "#d0f0c0", border: "1px", borderColor: "green", borderStyle: "solid"}}>Green is the prime color of the world</div>
// );
//----------------

//For exercise 4.2
// const element = (
//   <AlertButton style={{ marign: "10px 10px "}} type="primary">Alert me!</AlertButton>
// );
//----------------

//For exercise 4.3
const smartPeople = [
  { name: 'Johann Goethe', age: 82, IQ: 210},
  { name: 'Albert Einstein', age: 76, IQ: 205},
  { name: 'Leonardo da Vinci', age: 67, IQ: 180},
  { name: 'Isaac Newton', age: 84, IQ: 190},
  { name: 'James Maxwell', age: 48, IQ: 190},
  { name: 'Rudolf Clausius', age: 66, IQ: 190},
  { name: 'Nicolaus Copernicus', age: 70, IQ: 160},
  { name: 'Gottfried Leibniz', age: 70, IQ: 182},
  { name: 'William Sidis', age: 46, IQ: 200}
]

const element = [
  <ul>
    {smartPeople.map((person, index) => (<li key={index}>{person.name}, age: {person.age}, IQ: {person.IQ}</li>))}
  </ul>
  ];

ReactDOM.render(element, document.getElementById('root'));

reportWebVitals();
