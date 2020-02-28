import React from 'react';
import { Route } from 'react-router-dom';
import { Home, About } from 'pages';
import HeaderContainer from 'container/HeaderContainer';
import Footer from 'container/Footer';

class App extends React.Component {
    render() {
        return (
            <div>
                <HeaderContainer />
                <Route exact path="/" component={Home}/>
                <Route path="/About" component={About}/>
                <Footer />
            </div>
        );
    }
}

export default App;