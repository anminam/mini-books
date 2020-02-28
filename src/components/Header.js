import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <h3>MINIBOOKS</h3>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    padding: 20px 40px;
    color: white;
    font-weight: bold;
`;

export default Header;
