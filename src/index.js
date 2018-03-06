import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import VideoSearchApp from './VideoSearchApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<VideoSearchApp />, document.getElementById('react-container'));
registerServiceWorker();
