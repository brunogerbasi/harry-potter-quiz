import styled from 'styled-components';

import React from 'react';


function Logo() {
  return (
      <>
        <img src="/hp-logo.png" />
      </>
      
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
