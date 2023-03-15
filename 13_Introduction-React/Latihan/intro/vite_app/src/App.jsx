import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="header">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </header>
      <main>
        <h1>Vite + React</h1>
        <div className="card">
          <button className="btn" onClick={() => setCount(count + 1)}>
            <span className="count">{count}</span>
            <span className="text">{count === 1 ? 'Click' : 'Clicks'}</span>
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </main>
      <footer>
        Made with ❤️ by <a href="https://github.com/mnabilfurqon">M. Nabil Furqon</a>
      </footer>
    </div>
  );
}

export default App;