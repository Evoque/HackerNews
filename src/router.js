import React from 'react';
// import { Router, Route, Switch } from 'dva/router';
import {router} from 'dva';
import Home from './routes/Home';
 
const { Router, Route, Switch } = router;  

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/:type" component={props => <Home {...props}/>} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
