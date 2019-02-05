import * as React from 'react';
import { Route, Switch } from "react-router-dom";

import EditItem from './components/EditItem';
import NoMatch from './containers/NoMatch';
import WebShop from './containers/WebShop';
import Home from './containers/Home';

const routes = (
   <Switch>
      <Route exact={true} path="/" component={Home}/>
     <Route path="/webshop" component={WebShop}/>
     <Route path={`/edit/:id`} component={EditItem}/>
     <Route component={NoMatch}/>
   </Switch>
)

export default routes