import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';


function Logo() {
  return (
    <h1>Harry Potter</h1>
  );
}



const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;