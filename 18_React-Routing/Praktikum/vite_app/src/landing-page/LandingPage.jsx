import React from 'react';
import ReactDOM from 'react-dom';

function LandingPage() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><Link to="/create-product">Create Product</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1>Welcome to my Landing Page</h1>
          <p>Here you can find all the information you need about my products and services.</p>
          <button>Learn More</button>
        </section>
        <section className="features">
          <h2>Features</h2>
          <ul>
            <li><span>Feature 1</span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.</p></li>
            <li><span>Feature 2</span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.</p></li>
            <li><span>Feature 3</span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.</p></li>
          </ul>
        </section>
        <section className="testimonials">
          <h2>Testimonials</h2>
          <ul>
            <li>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.</p>
              <cite>John Doe</cite>
            </li>
            <li>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.</p>
              <cite>Jane Smith</cite>
            </li>
            <li>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.</p>
              <cite>Bob Johnson</cite>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 My Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;

ReactDOM.render(
  <LandingPage />,
  document.getElementById('root')
);