import React, { Component } from 'react';
import Header from 'components/Header';
import styled from 'styled-components';

class HeaderContainer extends Component {
    render() {
        return (
            <Wrapper>
                <Header />
            </Wrapper>
            
        );
    }
}

const Wrapper = styled.div`
    background-color: #1F8CE6;
`;

export default HeaderContainer;