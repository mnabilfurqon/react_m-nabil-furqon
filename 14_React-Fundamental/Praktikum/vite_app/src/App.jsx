// // import CreateProduct from '../components/createProduct'
// import Route from '../router/route'
// // import '../components/CreateProduct.css'
// import Calculator from '../calculator/calculator'
// // import './App.css'

// function App() {

//   return (
//     <div className="App">
//       <Route path="/">
//         <Calculator/>
//       </Route>
//     </div>
//   )
// }

// export default App

import React from "react";
import { Col, Layout, Row } from "antd";
import Calculator from "../calculator/Calculator";

const { Header, Content, Footer } = Layout;

const App = () => {
  const handleCalculate = (expression) => {
    try {
      const result = eval(expression);
      alert(result);
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <Layout>
      <Header>
        <Row justify="center">
          <h1 style={{ color: "white" }}>Kalkulator</h1>
        </Row>
      </Header>
      <Content>
        <Row justify="center">
          <Col xs={24} sm={18} md={12} lg={8}>
            <Calculator onCalculate={handleCalculate} />
          </Col>
        </Row>
      </Content>
      <Footer>
        <Row justify="center">
          <p>Made with ❤️ by M. Nabil Furqon</p>
        </Row>
      </Footer>
    </Layout>
  );
};

export default App;
