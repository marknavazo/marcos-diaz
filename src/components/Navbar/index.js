import React from 'react';
import { useSelector } from 'react-redux';
import { Router, NavLink, Route, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import history from '../../helpers/history';
import logoImg from '../../img/logo.jpg';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  z-index: 2;
`;

const ItemsContainer = styled.div`
  padding: 15px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 70px;
`;

const Menu = styled.nav`
  ul {
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: row;

    li {
      margin: 0 15px;

      @media screen and (max-width: 767px) {
        margin: 0 10px;
      }

      @media screen and (max-width: 479px) {
        margin: 0 5px;
      }
    }
  }
`;

const NavButton = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
  font-weight: 600;
  text-transform: uppercase;
  color: #3b8595;
  border-bottom: ${(props) => (props.border ? '1px solid #3b8595' : '0px')};
  transition: 0.5s;

  &:hover,
  &.active {
    color: #000;
    border-bottom: ${(props) => (props.border ? '4px solid #000000' : '0px')};
  }

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }

  @media screen and (max-width: 479px) {
    font-size: 18px;
  }
`;

const NavbarComponent = () => {
  const authentication = useSelector((state) => state.authentication);
  return (
    <Router history={history}>
      <Route>
        <Header>
          <Container>
            <Grid container spacing={2} alignItems="center" direction="row">
              <Grid item xs={12}>
                <ItemsContainer>
                  <NavLink to="/">
                    <Logo src={logoImg} />
                  </NavLink>
                  <Menu>
                    <ul>
                      <li>
                        <NavButton exact to="/" border="true">
                          Home
                        </NavButton>
                      </li>
                      <li>
                        <NavButton exact to="/users" border="true">
                          Usuarios
                        </NavButton>
                      </li>
                      <li>
                        <NavButton exact to="/teams" border="true">
                          Equipos
                        </NavButton>
                      </li>
                      {authentication && authentication.loggedIn && (
                        <li>
                          <NavButton exact to="/login">
                            <ExitToAppIcon />
                          </NavButton>
                        </li>
                      )}
                    </ul>
                  </Menu>
                </ItemsContainer>
              </Grid>
            </Grid>
          </Container>
        </Header>
      </Route>
    </Router>
  );
};

const Navbar = withRouter(NavbarComponent);
export default Navbar;
