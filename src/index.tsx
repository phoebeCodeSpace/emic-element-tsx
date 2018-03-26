import * as React from 'react';
import * as ReactDOM from 'react-dom';
import routes from './router';
import {
  HashRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import './style/base/reset.less';

ReactDOM.render(
  <div>
    <HashRouter>
      <Switch>
        {
        routes.map((item: object, i: number) =>
          <Route key={i} {...item} />
        )
        }
        <Redirect to="/icon" />
      </Switch>
    </HashRouter>
  </div>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
