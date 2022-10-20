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



const root = ReactDOM.createRoot(document.getElementById('root'));

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

root.render( 
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
  // <MySection>
  //   <MyButton>My Button Text</MyButton>
  // </MySection>
  // <MyComponent/>
);

reportWebVitals();
