import React from 'react';
import ReactDOM from 'react-dom';
import VideoSearchApp from './VideoSearchApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VideoSearchApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
