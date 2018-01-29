import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { init } from './firebase'

ReactDOM.render(<App />, document.getElementById('root'));
init()
registerServiceWorker();
