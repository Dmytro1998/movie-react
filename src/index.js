import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const MainApp = () =>( 
  <BrowserRouter>
  <App/>
  </BrowserRouter>


)
ReactDOM.render(
  
 
    <MainApp />
 ,
  document.getElementById('root')
);


