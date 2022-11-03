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

import { Card, Avatar } from 'antd';
import "antd/dist/antd.css";
import './Ex4/card.css';

import UserForm from './Ex4/Ex4-7';



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
// const smartPeople = [
//   { name: 'Johann Goethe', age: 82, IQ: 210},
//   { name: 'Albert Einstein', age: 76, IQ: 205},
//   { name: 'Leonardo da Vinci', age: 67, IQ: 180},
//   { name: 'Isaac Newton', age: 84, IQ: 190},
//   { name: 'James Maxwell', age: 48, IQ: 190},
//   { name: 'Rudolf Clausius', age: 66, IQ: 190},
//   { name: 'Nicolaus Copernicus', age: 70, IQ: 160},
//   { name: 'Gottfried Leibniz', age: 70, IQ: 182},
//   { name: 'William Sidis', age: 46, IQ: 200}
// ]

// const element = [
//   <ul>
//     {smartPeople.map((person, index) => (<li key={index}>{person.name}, age: {person.age}, IQ: {person.IQ}</li>))}
//   </ul>
//   ];
//----------------

//For exercise 4.4
// const { Meta } = Card;

// const card = {
//   title: 'Elon Musk',
//   description: 'Elon Reeve musk FRS is a business magnate, industrial designer, and engineer. He is the founder, CEO, CTO, and chief designer of SpaceX',
//   avatar: <img src="http://www.gstatic.com/tv/thumb/persons/487130/487130_v9_bb.jpg" alt="Elon Musk" />,
//   cover: 'https://media.vanityfair.com/photos/574f453fbdf148e4205f29df/16:9/w_1200,h_630,c_limit/hive-contributor-profile-elon-musk.jpg'
// };

// const element = (
//   <div>
//     <Card>
//       <Card.Meta className="card"
//         title={card.title}
//         description={card.description}
//         avatar={card.avatar}
//         cover={card.cover}
//         />
//     </Card>
//   </div>
// );
//----------------

//For exercise 4.5
// const user = {
//   firstName: 'Elon',
//   lastName: 'Musk',
//   age: 49
// }

// const element = (
//   <div>
//     <h1>User Information: </h1>
//     <ul>
//       <li>First Name: {user.firstName}</li>
//       <li>Last Name: {user.lastName}</li>
//       <li>Age: {user.age}</li>
//     </ul>
//   </div>
// );
//----------------

//For exercise 4.6
// const divStyle = {
//   fontSize: '15px',
//   backgroundColor: '#d0f0c0',
//   border: '1px',
//   borderColor: 'green',
//   borderStyle: 'solid',
// }
// const element = (
//   <div style={divStyle}>Green is the prime color of the world</div>
// );
//----------------

//For exercise 4.7
const element = (
  <div>
    <UserForm />
  </div>
);
ReactDOM.render(element, document.getElementById('root'));

reportWebVitals();
