import React from 'react';
import ReactDOM from 'react-dom';
 
import './index.css';
import * as serviceWorker from './serviceWorker';
 
import App from './Components/App';
import Firebase, { FirebaseContext } from './Components/Firebase';
 
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);
 
serviceWorker.unregister();