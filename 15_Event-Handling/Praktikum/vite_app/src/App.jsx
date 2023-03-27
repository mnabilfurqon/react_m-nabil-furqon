import React from 'react';
import Artikel from './artikel/Artikel';
import ExampleComponent from './artikel/Artikel';
import Home from './router/pages/Home';
import Route from './router/Route';

const App = () => {
  return (
    <div className='App'>
      <Route path="/">
        <Home></Home>
      </Route>
      <Route path="/Artikel">
        <Artikel></Artikel>
      </Route>
    </div>
  );
}

export default App;
