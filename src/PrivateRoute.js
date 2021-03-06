import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
// import { useAuth } from './context/auth';

function PrivateRoute({ component: Component, ...rest }) {
  // const { authTokens } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('user') ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { referer: props.location } }} />
        )
      }
    />
  );
}

PrivateRoute.defaultProps = {
  component: null,
  location: null,
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default PrivateRoute;
