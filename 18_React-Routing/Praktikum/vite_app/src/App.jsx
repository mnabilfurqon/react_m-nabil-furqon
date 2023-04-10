import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './landing-page/LandingPage';
import CreateProduct from './create-product/CreateProduct';
import UserDetail from './user-detail/UserDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/create-product" component={CreateProduct} />
        <Route path="/account/:id" component={UserDetail} />
      </Switch>
    </Router>
  );
}

export default App;