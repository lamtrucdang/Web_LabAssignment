import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import MySection from './MySection';
import MyButton from './MyButton';

import MyComponent from './Ex1/Ex1';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // <MySection>
  //   <MyButton>My Button Text</MyButton>
  // </MySection>
  <MyComponent/>
);

reportWebVitals();
