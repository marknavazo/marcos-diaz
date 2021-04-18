import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import Loading from '../../components/Loading';
import Parallax from '../../components/Parallax';
import Team from '../../components/Team';
import { Error } from '../../styled-components/authForms';
import Pages from '../../styled-components/pages';

const Teams = () => {
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getData = () => {
    setLoading(true);
    const usersURl = `https://elenasport-io1.p.rapidapi.com/v2/seasons/3229/teams`;
    axios
      .get(usersURl, {
        headers: {
          'x-rapidapi-key': 'ded060c48cmsh1d33a20465d26dbp1741b2jsn9c2daac1adab',
          'x-rapidapi-host': 'elenasport-io1.p.rapidapi.com',
          useQueryString: true,
        },
      })
      .then((result) => {
        if (result.data) {
          setIsError(false);
          setData(result.data.data);
        } else {
          setIsError(true);
        }
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    document.title = `Marcos Díaz Navazo · Equipos`;
    getData();
  }, []);

  if (loading) {
    return <Loading color="#33638E" />;
  }

  return (
    <div>
      <Parallax
        text="Equipos"
        top
        imageUrl="https://images.unsplash.com/photo-1510526292299-20af3f62d453?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2514&q=80"
      />
      <Pages>
        <Grid container justify="center">
          {data &&
            data.length > 0 &&
            data.map((team, index) => <Team key={`data${index + 1}`} data={team} />)}
        </Grid>
      </Pages>
      {isError && <Error>Error</Error>}
    </div>
  );
};

export default Teams;
