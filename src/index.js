import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalStyles } from './global-styles';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import { FirebaseContext } from './context/firebase';
import { seedDatabase } from './seed';

const config = {
  apiKey: "AIzaSyDz0QgZHKwlQDdxDZ7LzVqGmwkaOg-Q3IU",
  authDomain: "netflix-clone-73d15.firebaseapp.com",
  projectId: "netflix-clone-73d15",
  storageBucket: "netflix-clone-73d15.appspot.com",
  messagingSenderId: "1039612780373",
  appId: "1:1039612780373:web:b39e33424abe96316319dc"
};
const firebaseApp = firebase.initializeApp(config);
seedDatabase(firebaseApp)
ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase: firebaseApp }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
