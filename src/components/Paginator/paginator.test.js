import React from 'react';
import ReactDOM from 'react-dom';
import Paginator from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Paginator />, div);
  ReactDOM.unmountComponentAtNode(div);
});
