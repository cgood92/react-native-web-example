import React from 'react';
import ReactDOM from 'react-dom';
import './src/styles.css';
import App from './src/app';

import {initializeApp} from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

initializeApp({
  /* ...Your config here... */
});

ReactDOM.render(<App />, document.getElementById('root'));
