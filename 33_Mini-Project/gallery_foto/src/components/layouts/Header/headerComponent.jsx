import { Layout, Menu, Row } from "antd";
import React, { useState } from "react";
import { MENU_ITEM } from "../constants";
import { Link } from "react-router-dom";
import { LogoAnime } from "../../../assets";

const HeaderComponent = () => {
  const { Header } = Layout;
  const path = window.location.pathname;
  const [current, setCurrent] = useState(path);
  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 3,
        width: "100%",
        backgroundColor: "white"
      }}
    >
      <Row justify="space-between">
        <Link to="/">
          <img src={LogoAnime} alt="" style={{float: "left",
              borderRadius: "20px",
              width: 100,
              height: 40,
              margin: "16px 24px 16px 0",
              background: "rgba(255, 255, 255, 0.2)",}}
          onClick={() => setCurrent("")}
          />
        </Link>
        <Menu
          theme="light"
          mode="horizontal"
          items={MENU_ITEM}
          disabledOverflow
          onClick={onClick}
          selectedKeys={[current]}
        />
      </Row>
    </Header>
  );
};

export default HeaderComponent;
