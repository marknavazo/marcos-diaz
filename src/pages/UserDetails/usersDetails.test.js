import React from 'react';
import ReactDOM from 'react-dom';
import UserDetails from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});
