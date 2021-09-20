import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import {AuthContext} from '../context';
import Loader from './UI/loader/Loader';

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader/>
  }

  return ( 
      isAuth
        ? <Switch>
            {privateRoutes.map(r =>
              <Route key={r.path} component={r.component} path={r.path} exact={r.exact} />
            )}
            <Redirect to="/posts" />
          </Switch>
        : <Switch>
          {publicRoutes.map(r =>
            <Route key={r.path} component={r.component} path={r.path} exact={r.exact} />
          )}
          <Redirect to="/login" />
        </Switch>

     );
}
 
export default AppRouter;