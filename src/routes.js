import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home';
import Configurations from './components/pages/Configurations';
import Attention from './components/pages/Attention';
import Charts from './components/pages/Charts';
import Favorite from './components/pages/Favorite';
import Comments from './components/pages/Comments';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Charts} path="/charts" />
      <Route component={Favorite} path="/favorite" />
      <Route component={Comments} path="/comments" />
      <Route component={Configurations} path="/configurations" />
      <Route component={Attention} path="/attention" />
    </BrowserRouter>
  );
}

export default Routes;