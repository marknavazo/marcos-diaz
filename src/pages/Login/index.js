import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Parallax from '../../components/Parallax';
import Loading from '../../components/Loading';
import userActions from '../../actions/user.actions';
import logoImg from '../../img/logo.jpg';
import { Card, Logo, Form, Input, Button } from '../../styled-components/authForms';
import Pages from '../../styled-components/pages';

const Login = () => {
  const [email, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const loggingIn = useSelector((state) => state.authentication.loggingIn);
  const dispatch = useDispatch();

  // reset login status
  useEffect(() => {
    document.title = `Marcos Díaz Navazo · Inicio de sesión`;
    dispatch(userActions.logout());
  }, []);

  const postLogin = () => {
    // {
    //   "email": "eve.holt@reqres.in",
    //   "password": "cityslicka"
    // }

    if (email && password) {
      dispatch(userActions.login(email, password));
    }
  };

  return (
    <div>
      <Parallax
        text="Inicio de sesión"
        top
        imageUrl="https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2553&q=80"
      />
      <Pages>
        <Card>
          <Logo src={logoImg} />
          <Form>
            <Input
              type="email"
              value={email}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              placeholder="email"
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="password"
            />
            <Button onClick={postLogin}>Iniciar sesión</Button>
            {loggingIn && <Loading color="#33638E" />}
          </Form>
        </Card>
      </Pages>
    </div>
  );
};

export default Login;
