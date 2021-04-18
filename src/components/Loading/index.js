import React from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Loading = (props) => {
  const { additionalClass, color } = props;
  return (
    <div className={additionalClass}>
      <Loader
        type="ThreeDots"
        color={color || '#000000'}
        height={80}
        width={60}
        margin="0px auto"
      />
    </div>
  );
};

Loading.defaultProps = {
  additionalClass: null,
  color: null,
};

Loading.propTypes = {
  additionalClass: PropTypes.string,
  color: PropTypes.string,
};

export default Loading;
