import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core';

const TeamContainer = styled(Card)`
  margin: 15px;
  padding: 15px;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 150px;
  margin: 0px auto;
`;

const Data = styled.div`
  min-height: 230px;
`;

const Mail = styled.span`
  color: #33638e;
  word-break: break-all;
`;

const Web = styled.a`
  color: #33638e;
  word-break: break-all;
`;

const Team = (props) => {
  const { data } = props;
  return (
    <Grid item xs={12} md={4} xl={3}>
      <TeamContainer>
        {data && data.badgeURL && <Logo src={data.badgeURL} alt={data.fullName} />}
        {data && (
          <Data>
            <h3>{data.fullName}</h3>
            <Mail>{data.email}</Mail>
            <br />
            {data.address}
            <br />
            {data.founded}
            <br />
            {data.phone}
            <br />
            <Web href={data.officialPage} target="_blank">
              {data.officialPage}
            </Web>
          </Data>
        )}
      </TeamContainer>
    </Grid>
  );
};

Team.defaultProps = {
  data: null,
};

Team.propTypes = {
  data: PropTypes.shape({
    badgeURL: PropTypes.string,
    fullName: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
    founded: PropTypes.string,
    phone: PropTypes.string,
    officialPage: PropTypes.string,
  }),
};

export default Team;
