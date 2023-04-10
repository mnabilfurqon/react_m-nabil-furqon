import React from 'react';
import CreateProduct from './create-product/CreateProduct';
import Route from './router/pages/Route';

const App = () => {
  return (
    <div className='App'>
      <Route path="/">
        <CreateProduct/>
      </Route>
    </div>
  );
}

export default App;