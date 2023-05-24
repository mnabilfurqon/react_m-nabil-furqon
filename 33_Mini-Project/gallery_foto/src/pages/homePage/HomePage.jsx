import React from "react";
import { Button, Row, Col, Card } from "antd";
import "./homePage.css";
import Gap from "../../components/gap/Gap";
import { ANIME_DATA } from "./constans";

const HomePage = () => {
  return (
    <div className="site-layout-content">
      <h1>Welcome to Gallery Foto Anime</h1>
      <p>
        Selamat datang di website galeri foto yang menakjubkan! Temukan
        keindahan gambar-gambar anime yang memukau di sini. Simpan gambar
        favorit Anda dengan mudah. Jika Anda memiliki saran gambar anime yang
        ingin ditampilkan, jangan ragu untuk mengklik tombol di bawah ini dan
        berikan masukan Anda!
      </p>
      <Button type="primary" href="/kritik-saran">
        Klik Here!
      </Button>

      <Gap height={50} />
      <section>
        <h2>Foto-foto Anime</h2>
        <Row justify="center" gutter={[16, 16]}>
          {ANIME_DATA.map((anime) => (
            <Col key={anime.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={<img alt={anime.title} src={anime.image} />}
              >
                <Card.Meta title={anime.title} />
                <Button type="primary" href="/kritik-saran">
                  Download
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default HomePage;
