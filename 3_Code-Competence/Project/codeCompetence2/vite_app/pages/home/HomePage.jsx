import { Layout, Menu } from 'antd';
import { InstagramOutlined, TwitterOutlined, YoutubeOutlined, FacebookOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

function HomePage() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo">
          <img src="https://assets.stickpng.com/images/5ede4a3fb760540004f2c5e9.png" alt="Logo Kimetsu no Yaiba" width="30px" />
          <a href="#">Kimetsu no Yaiba</a>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <section className="hero">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <h1 className="title">Kimetsu no Yaiba</h1>
                  <p className="subtitle">Kimetsu no Yaiba (bahasa Jepang: 鬼滅の刃) adalah sebuah seri manga Jepang yang ditulis dan diilustrasikan oleh Koyoharu Gotōge. Ceritanya mengisahkan tentang Tanjiro Kamado, seorang anak laki-laki yang menjadi pembasmi iblis setelah keluarganya dibantai oleh iblis dan adik perempuannya yang bernama Nezuko diubah menjadi iblis.</p>
                  <a href="#" className="btn btn-primary">Watch Now</a>
                  <div className="social-icons">
                    <a href="#"><FacebookOutlined /></a>
                    <a href="#"><TwitterOutlined /></a>
                    <a href="#"><InstagramOutlined /></a>
                    <a href="#"><YoutubeOutlined /></a>
                  </div>
                </div>
                <div className="img-fluid col-md-6">
                  <a href="https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba" target="_blank" title="Kimetsu no Yaiba">
                    <img src="https://cdn11.bigcommerce.com/s-89ffd/images/stencil/728x728/products/81788/273911/4970381505882_4432f735241beca956b4124deff9ae30__64392.1601946276.jpg?c=2" alt="Kimetsu no Yaiba" width="600px" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; 2023 M. Nabil Furqon</p>
            </div>
            <div className="col-md-6">
              <ul className="social-icons">
                <li><a href="#"><FacebookOutlined /></a></li>
                <li><a href="#"><TwitterOutlined /></a></li>
                <li><a href="#"><InstagramOutlined /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </Footer>
    </Layout>
  );
}

export default HomePage;