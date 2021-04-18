import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../helpers/store';
import Login from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Login />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
