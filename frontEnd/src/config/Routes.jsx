import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';

import Login from '../pages/Login';
import MoviePlay from '../pages/MoviePlay';
import Forums from '../pages/Forums';

const Routes = () => {
    return (
        <Switch>
            <Route
                path='/login'
                exact
                component={Login}
            />
            <Route
                path='/movieplay'
                exact
                component={MoviePlay}
            />
            <Route
                path='/forums'
                exact
                component={Forums}
            />
            <Route
                path='/:category/search/:keyword'
                component={Catalog}
            />
            <Route
                path='/:category/:id'
                component={Detail}
            />
            <Route
                path='/:category'
                component={Catalog}
            />
            <Route
                path='/'
                exact
                component={Home}
            />
        </Switch>
    );
}

export default Routes;
