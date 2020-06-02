import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Login from './components/Login';
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';
import Advertisement from './components/Advertisement';
import PopularPosts from './components/PopularPosts';
import Footer from './components/Footer';

import routes from './routes';

class App extends Component {
    
    showContentRoutes = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route key={index} exact={route.exact} path={route.path} component={route.main} />
                );
            });
        }
        return result;
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Login />
                        <NavBar />
                        <div className="row">
                            <Switch>
                                {this.showContentRoutes(routes)}
                            </Switch>
                            <div className="col-sm-4">
                                <SearchForm />
                                <Advertisement />
                                <PopularPosts />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
