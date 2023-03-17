import './App.css';
import AboutMe from './pages/aboutMe/AboutMe';
import HomePage from './pages/homePage/HomePage';
import Portofolio from './pages/portofolio/Portofolio';
import Route from './router/Route';

function App() {
  return (
    <div className="App">
      <Route path="/">
        <HomePage></HomePage>
      </Route>
      <Route path="/about-me">
        <AboutMe></AboutMe>
      </Route>
      <Route path="/portofolio">
        <Portofolio></Portofolio>
      </Route>
    </div>
  );
}

export default App;