import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import '../routes/index.css'

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Router>
    <AnimatedSwitch
      atEnter={{  opacity: 0.5 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}

      className="switch-wrapper"
    >
      <Route path="/" exact component={Dashboard} />
      <Route path="/repositories/:repository+" component={Repository} />
    </AnimatedSwitch>
  </Router>
);

export default Routes;
