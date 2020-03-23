import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Error404 = () => {
  return (
    <Container>
      <img
        src={process.env.PUBLIC_URL + '/404.png'}
        alt="Error 404: Page not found"
      />
      <br />
      <Link to="/">
        <h2>Oh my god, where am I?</h2>
        <br />
        <h5>This page does not exist. Click here to go home.</h5>
      </Link>
      <span>
        <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">
          Illustration by icons8.com
        </a>
      </span>
    </Container>
  );
};

export default Error404;
