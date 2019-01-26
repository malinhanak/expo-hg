import * as React from 'react';
import { Route, Switch } from "react-router-dom";

import NoMatch from './containers/NoMatch';
import Home from './containers/Home';

const routes = (
    <Switch>
        <Route exact={true} path="/" component={Home}/>
        {/* <Route path="/table" component={Table}/> */}
        <Route component={NoMatch}/>
    </Switch>
)

export default routes