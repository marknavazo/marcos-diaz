import React, { useState, useEffect } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import PrivateRoute from './PrivateRoute';
import alertActions from './actions/alert.actions';
import history from './helpers/history';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Navbar from './components/Navbar';
import { AuthContext } from './context/auth';

const MainContainer = styled.div`
  overflow: hidden;
  margin-top: 100px;
`;

const App = () => {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen(() => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }, []);

  const [authUser, setAuthUser] = useState();

  const setUser = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    setAuthUser(data);
  };

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser: setUser }}>
      {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
      <MainContainer>
        <Grid container spacing={2} alignItems="center" direction="row">
          <Grid item xs={12}>
            <Router history={history}>
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/teams" component={Teams} />
                <PrivateRoute exact path="/users" component={Users} />
                <PrivateRoute exact path="/users/:id" component={UserDetails} />
                <Route exact path="*" component={PageNotFound} />
              </Switch>
            </Router>
          </Grid>
        </Grid>
      </MainContainer>
    </AuthContext.Provider>
  );
};

export default App;
