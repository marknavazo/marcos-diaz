import React from 'react';
import ReactDOM from 'react-dom';
import Parallax from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Parallax />, div);
  ReactDOM.unmountComponentAtNode(div);
});
