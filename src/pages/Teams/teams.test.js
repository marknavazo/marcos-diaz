import React from 'react';
import ReactDOM from 'react-dom';
import Teams from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Teams />, div);
  ReactDOM.unmountComponentAtNode(div);
});
