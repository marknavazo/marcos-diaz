import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import swal from 'sweetalert2';
import Edit from '@material-ui/icons/Edit';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Delete from '@material-ui/icons/Delete';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Loading from '../../components/Loading';
import Parallax from '../../components/Parallax';
import history from '../../helpers/history';
import { Form, Button, Error } from '../../styled-components/authForms';
import Pages from '../../styled-components/pages';

const User = styled.div`
  display: flex;
`;

const Avatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 25px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  background-image: url(${(props) => props.image});
  transition: 0.5s;

  @media screen and (max-width: 767px) {
    width: 130px;
    height: 130px;
  }

  @media screen and (max-width: 479px) {
    width: 100px;
    height: 100px;
  }
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Name = styled.div`
  font-weight: 600;
  font-size: 24px;

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`;

const Email = styled.div`
  font-size: 22px;
  margin-top: 15px;

  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`;

const Id = styled.div`
  font-size: 22px;
  margin-top: 15px;

  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`;

const Buttons = styled.div`
  margin-top: 15px;
`;

const ActionButton = styled.button`
  text-decoration: none;
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  color: #3b8595;
  transition: 0.5s;
  border: 0;
  margin-right: 15px;
  background: transparent;
  cursor: pointer;

  svg {
    font-size: 1.2em;
  }

  &:hover,
  &.active {
    color: #000;
    background: transparent;
  }

  &:focus,
  &:active {
    outline: none;
  }
`;

const UserDetails = ({ match }) => {
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [edit, setEdit] = useState(false);

  const getUsers = () => {
    if (match && match.params && match.params.id) {
      setLoading(true);
      const usersURl = `https://reqres.in/api/users/${match.params.id}`;
      axios
        .get(usersURl)
        .then((result) => {
          if (result.data) {
            setUser(result.data.data);
          } else {
            setIsError(true);
          }
        })
        .catch(() => {
          setIsError(true);
        })
        .finally(() => setLoading(false));
    }
  };

  const editUser = () => {
    if (match && match.params && match.params.id) {
      setSending(true);
      const usersURl = `https://reqres.in/api/users/${match.params.id}`;
      axios
        .put(usersURl, user)
        .then((result) => {
          if (result.data) {
            setEdit(false);
            swal.fire({
              title: 'OK',
              text: 'Usuario editado correctamente',
              icon: 'success',
            });
          } else {
            swal.fire({
              title: 'Error',
              text: 'Error al editar el usuario',
              icon: 'error',
            });
          }
        })
        .catch(() => {
          swal.fire({
            title: 'Error',
            text: 'Error al editar el usuario',
            icon: 'error',
          });
        })
        .finally(() => setSending(false));
    }
  };

  const deleteUser = () => {
    if (match && match.params && match.params.id) {
      setSending(true);
      const usersURl = `https://reqres.in/api/users/${match.params.id}`;
      axios
        .delete(usersURl)
        .then((result) => {
          if (result.status === 204) {
            swal.fire({
              title: 'OK',
              text: 'Usuario eliminado correctamente',
              icon: 'success',
            });
            history.push('/users');
          } else {
            swal.fire({
              title: 'Error',
              text: 'Error al eliminar el usuario',
              icon: 'error',
            });
          }
        })
        .catch(() => {
          swal.fire({
            title: 'Error',
            text: 'Error al eliminar el usuario',
            icon: 'error',
          });
        })
        .finally(() => setSending(false));
    }
  };

  const changeForm = (target) => {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    document.title = `Marcos Díaz Navazo · Usuario`;
    getUsers();
  }, []);

  if (loading) {
    return <Loading color="#33638E" />;
  }

  return (
    <div>
      <Parallax
        text="Usuario"
        top
        imageUrl="https://images.unsplash.com/photo-1540379708242-14a809bef941?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3800&q=80"
      />
      <Pages justify="center">
        <Grid container justify="center">
          <Grid item xs={12} md={6}>
            {isError && <Error>Error</Error>}
            {user && (
              <User>
                <Avatar image={user.avatar} />
                <Data>
                  {!edit ? (
                    <>
                      <Name>
                        {user.first_name} {user.last_name}
                      </Name>
                      <Email>{user.email}</Email>
                      <Id>Id: {user.id}</Id>
                    </>
                  ) : (
                    <>
                      <Form>
                        <TextField
                          id="email"
                          name="email"
                          label="Email"
                          value={user.email}
                          onChange={(e) => {
                            changeForm(e.target);
                          }}
                        />
                        <TextField
                          id="first_name"
                          name="first_name"
                          label="Nombre"
                          value={user.first_name}
                          onChange={(e) => {
                            changeForm(e.target);
                          }}
                        />
                        <TextField
                          id="last_name"
                          name="last_name"
                          label="Apellidos"
                          value={user.last_name}
                          onChange={(e) => {
                            changeForm(e.target);
                          }}
                        />
                        <Button onClick={editUser}>Guardar</Button>
                        {sending && <Loading color="#33638E" />}
                      </Form>
                    </>
                  )}
                  <Buttons>
                    <ActionButton onClick={() => setEdit(!edit)}>
                      <Edit />
                    </ActionButton>
                    <ActionButton onClick={() => deleteUser()}>
                      <Delete />
                    </ActionButton>
                    <ActionButton onClick={() => history.push('/users')}>
                      <ArrowBack />
                    </ActionButton>
                  </Buttons>
                </Data>
              </User>
            )}
          </Grid>
        </Grid>
      </Pages>
    </div>
  );
};

UserDetails.defaultProps = {
  match: null,
};

UserDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

export default UserDetails;
