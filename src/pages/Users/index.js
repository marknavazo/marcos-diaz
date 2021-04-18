import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Parallax from '../../components/Parallax';
import Loading from '../../components/Loading';
import Paginator from '../../components/Paginator';
import { Error } from '../../styled-components/authForms';
import Pages from '../../styled-components/pages';

const Avatar = styled.div`
  width: 74px;
  height: 74px;
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  background-image: url(${(props) => props.image});
  float: right;
`;

const View = styled(Link)`
  color: #3b8595;
  text-decoration: none;

  &:hover,
  &.current {
    color: #000000;
  }
`;

const Users = () => {
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const getUsers = (pageShow = null) => {
    setLoading(true);
    const usersURl = `https://reqres.in/api/users`;
    axios
      .get(pageShow ? `${usersURl}?page=${pageShow}` : usersURl)
      .then((result) => {
        if (result.data) {
          setIsError(false);
          setUsers(result.data.data);
          setCurrentPage(result.data.page);
          setTotalPages(result.data.total_pages);
        } else {
          setIsError(true);
        }
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => setLoading(false));
  };

  const goToPage = (page) => {
    getUsers(page);
  };

  useEffect(() => {
    document.title = `Marcos Díaz Navazo · Usuarios`;
    getUsers();
  }, []);

  if (loading) {
    return <Loading color="#33638E" />;
  }

  return (
    <div>
      <Parallax
        text="Usuarios"
        top
        imageUrl="https://images.unsplash.com/photo-1494177310973-4841f7d5a882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2551&q=80"
      />
      <Pages>
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Email</b>
                </TableCell>
                <TableCell align="right">
                  <b>Nombre</b>
                </TableCell>
                <TableCell align="right">
                  <b>Apellidos</b>
                </TableCell>
                <TableCell align="right">
                  <b>id</b>
                </TableCell>
                <TableCell align="right">
                  <b>Avatar</b>
                </TableCell>
                <TableCell align="right">&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            {users && users.length > 0 && (
              <TableBody>
                {users.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.email}
                    </TableCell>
                    <TableCell align="right">{row.first_name}</TableCell>
                    <TableCell align="right">{row.last_name}</TableCell>
                    <TableCell align="right">{row.id}</TableCell>
                    <TableCell align="right">
                      <Avatar image={row.avatar} />
                    </TableCell>
                    <TableCell align="right">
                      <View to={`/users/${row.id}`}>
                        <VisibilityIcon />
                      </View>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
        </TableContainer>
        {isError && <Error>Error</Error>}
        {totalPages && totalPages > 1 && (
          <Paginator currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} />
        )}
      </Pages>
    </div>
  );
};

export default Users;
