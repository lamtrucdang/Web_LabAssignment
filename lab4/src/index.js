import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MyComponent from './components/MyComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

//Ex 1
//   <Router>
//     <Routes>
//         <Route path="/" element={<MyComponent />} />
//     </Routes>
//   </Router>
//-------------

//Ex 2
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
