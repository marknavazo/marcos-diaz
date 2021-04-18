import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const PaginatorContainer = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
`;

const Page = styled.button`
  border: 0;
  background: transparent;
  font-size: 22px;
  cursor: pointer;
  color: #3b8595;

  &:hover,
  &.current {
    color: #000000;
    font-weight: 600;
  }

  &:focus,
  &:active {
    outline: none;
  }
`;

const Paginator = (props) => {
  const { currentPage, totalPages, goToPage } = props;
  const [pages, setPages] = useState([]);

  const getPages = () => {
    const pagesAux = [];
    for (let i = 1; i <= totalPages; i += 1) {
      pagesAux.push(i);
      setPages(pagesAux);
    }
  };

  useEffect(() => {
    getPages();
  }, []);

  return (
    <PaginatorContainer>
      {pages &&
        pages.map((page, index) => (
          <Page
            key={`page${index + 1}`}
            className={currentPage === page && 'current'}
            onClick={() => goToPage(page)}
          >
            {page}
          </Page>
        ))}
    </PaginatorContainer>
  );
};

Paginator.defaultProps = {
  currentPage: 1,
  totalPages: null,
  goToPage: null,
};

Paginator.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  goToPage: PropTypes.func,
};

export default Paginator;
