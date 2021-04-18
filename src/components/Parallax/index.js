import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ParallaxContainer = styled.div`
  padding-top: ${(props) => (props.top ? '275px' : '200px')};
  padding-bottom: 200px;
  overflow: hidden;
  position: relative;
  width: 100%;
  background-attachment: fixed;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${(props) => props.image});
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);

  @media screen and (max-width: 1920px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  @media screen and (max-width: 767px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

const Text = styled.h2`
  font-size: 90px;
  letter-spacing: 10px;
  text-align: center;
  color: white;
  font-weight: 400;
  text-transform: uppercase;
  z-index: 10;
  opacity: 0.9;
  -webkit-text-fill-color: #fff;
  -webkit-text-stroke: 2px #000;

  @media screen and (max-width: 1920px) {
    font-size: 70px;
  }

  @media screen and (max-width: 767px) {
    font-size: 30px;
  }
`;

const Parallax = (props) => {
  const { text, top, imageUrl } = props;
  return (
    <section>
      <ParallaxContainer image={imageUrl} top={top}>
        <Text>{text}</Text>
      </ParallaxContainer>
    </section>
  );
};

Parallax.defaultProps = {
  text: null,
  top: null,
  imageUrl: null,
};

Parallax.propTypes = {
  text: PropTypes.string,
  top: PropTypes.bool,
  imageUrl: PropTypes.string,
};

export default Parallax;
