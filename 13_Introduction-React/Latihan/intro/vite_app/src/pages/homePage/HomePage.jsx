import React from 'react';
import reactLogo from '../../assets/react.svg';
import {ReactLogo, Programmer} from '../../assets/index';
import ButtonComponent from '../../components/buttonComponent/ButtonComponent';

const HomePage = () => {
  // const [count, setCount] = useState(0);

  const gambar = {
    linkGambar: "https://media.istockphoto.com/id/1222784770/id/vektor/ikon-kursor-tangan-klik-mouse.jpg?s=170667a&w=0&k=20&c=oUi2mPyDneTqNR05_PtqJEfzchHlGPh3BBASu1OWbX4=",
    aboutMe: "Ketika anda kesal dan ingin merusak mouse, maka pakailah aplikasi ini. Dijamin tangan anda triplex"
  }

  return (
    <div>
      <header className="header">
        {/* <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
        <img src={gambar.linkGambar} alt=""></img>
      </header>
      <main>
        <h1>Tutorial Merusak Mouse</h1>
        <div className="card">
          <img src={Programmer} alt=""></img>
          {/* <button className="btn" onClick={() => setCount(count + 1)}>
            <span className="count">{count}</span>
            <span className="text">{count === 1 ? 'Click' : 'Clicks'}</span>
          </button> */}
          <p>{gambar.aboutMe}</p>
          {/* <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p> */}
        </div>
        {/* <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p> */}
      </main>
      <footer>
        Made with ❤️ by <a href="https://github.com/mnabilfurqon">M. Nabil Furqon</a>
      </footer>
      <ButtonComponent></ButtonComponent>
    </div>
  );
}

export default HomePage;