import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './pages/main';
import Products from './pages/products';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} ></Route>
            <Route exact path="/products/:id" component={Products} ></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes; 