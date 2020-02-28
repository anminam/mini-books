import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wapper>
      <div>서울시 은평구에 살아요</div>
      <div>© Anminam In Ther House</div>
    </Wapper>
  );
}


const Wapper = styled.div`
    width: 100%;
    color: #ffffff;
    background: #303538;
    padding: 15px 20px 15px 20px;
    font-size: 12px;
`;



export default Footer;
