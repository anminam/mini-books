import React from 'react';
import styled from 'styled-components';

import BookSection from 'container/BookSection';

class Home extends React.Component {
    render() {
        return (
            <PageWrapper>
                <BookSection />
            </PageWrapper>
        );
    }
}

const PageWrapper = styled.div`
    margin: 30px 20px;
`;


export default Home;