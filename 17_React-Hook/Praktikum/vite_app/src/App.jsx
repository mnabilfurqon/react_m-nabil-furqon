import React from 'react';
import CreateAccount from './create-account/CreateAccount';
import CreateProduct from './create-product/CreateProduct';
import Route from './router/pages/Route';

const App = () => {
  return (
    <div className='App'>
      <Route path="/">
        <CreateAccount />
      </Route>
      <Route path="/Product">
        <CreateProduct />
      </Route>
    </div>
  );
}

export default App;