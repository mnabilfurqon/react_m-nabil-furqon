import React from "react";
import { Card, Col, Row } from "antd";
import { Carousel } from "antd";
import { Programmer, ReactLogo } from "../../assets";

const CardComponent = () => {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <>
      <Carousel autoplay>
        <div>
          <img src={Programmer} alt="" />
        </div>
        <div>
          <img src={ReactLogo} alt="" />
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>

      <Row gutter={16}>
        <Col span={8}>
          <Card title="Nama" bordered={false}>
            M. Nabil Furqon
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Tanggal Lahir" bordered={false}>
            15 November 2001
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Hobi" bordered={false}>
            Ngoding, tapi pusing
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CardComponent;
