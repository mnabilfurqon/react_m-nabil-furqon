import { Layout } from 'antd';
import './App.css';
import { HomePage, AboutUs, Contact } from '../pages';

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Content>
          <HomePage></HomePage>
          <AboutUs></AboutUs>
          <Contact></Contact>
        </Content>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;