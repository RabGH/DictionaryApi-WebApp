import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Dictionary from './pages/Output';
import Error from './pages/Error';

function Routes() {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/Contact'>
                <Contact />
            </Route>
            <Route exact path='/Dictionary'>
                <Dictionary />
            </Route>
            <Route exact path='/Error'>
                <Error />
            </Route>
        </Switch>
    );
}

export default Routes;
