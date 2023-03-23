import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Col, Row, Typography } from "antd";
import {
  PlusOutlined,
  MinusOutlined,
  CloseOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ClearOutlined,
  CheckOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const Calculator = ({ onCalculate }) => {
  const [expression, setExpression] = useState("");

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const handleClearButtonClick = () => {
    setExpression("");
  };

  const handleCalculateButtonClick = () => {
    onCalculate(expression);
  };

  return (
    <>
      <Row justify="center" style={{ marginBottom: 16 }}>
        <Text>{expression}</Text>
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={6}>
          <Button block onClick={() => handleButtonClick("7")}>
            7
          </Button>
        </Col>
        <Col span={6}>
          <Button block onClick={() => handleButtonClick("8")}>
            8
          </Button>
        </Col>
        <Col span={6}>
          <Button block onClick={() => handleButtonClick("9")}>
            9
          </Button>
        </Col>
        <Col span={6}>
          <Button block icon={<PlusOutlined />} onClick={() => handleButtonClick("+")}>
            Tambah
          </Button>
        </Col>
        <Col span={6}>
          <Button block onClick={() => handleButtonClick("4")}>
            4
          </Button>
        </Col>
        <Col span={6}>
          <Button block onClick={() => handleButtonClick("5")}>
            5
          </Button>
        </Col>
        <Col span={6}>
          <Button block onClick={() => handleButtonClick("6")}>
            6
          </Button>
        </Col>
        <Col span={6}>
          <Button block icon={<MinusOutlined />} onClick={() => handleButtonClick("-")}>
            Kurang
          </Button>
        </Col>
        <Col span={6}>
          <Button block onClick={() => handleButtonClick("1")}>
            1
          </Button>
        </Col>
        <Col span={6}>
          <Button block onClick={() => handleButtonClick("2")}>
            2
          </Button>
        </Col>
        <Col span={6}>
          <Button block onClick={() => handleButtonClick("3")}>
            3
          </Button>
        </Col>
        <Col span={6}>
          <Button block icon={<CloseOutlined />} onClick={() => handleButtonClick("*")}>
            Kali
          </Button>
        </Col>
        <Col span={6}>
          <Button block onClick={() => handleButtonClick(".")}>
            .
          </Button>
        </Col>
    <Col span={6}>
      <Button block onClick={() => handleButtonClick("0")}>
        0
      </Button>
    </Col>
    <Col span={6}>
      <Button block onClick={() => handleButtonClick("%")}>
        %
      </Button>
    </Col>
    <Col span={6}>
      <Button block icon={<ArrowLeftOutlined />} onClick={() => handleButtonClick("(")}>
        Kurung Buka
      </Button>
    </Col>
    <Col span={6}>
      <Button block icon={<ArrowRightOutlined />} onClick={() => handleButtonClick(")")}>
        Kurung Tutup
      </Button>
    </Col>
    <Col span={12}>
      <Button block icon={<ClearOutlined />} onClick={handleClearButtonClick}>
        Clear
      </Button>
    </Col>
    <Col span={12}>
      <Button block icon={<CheckOutlined />} type="primary" onClick={handleCalculateButtonClick}>
        Hitung
      </Button>
    </Col>
  </Row>
</>
);
};

Calculator.propTypes = {
onCalculate: PropTypes.func.isRequired,
};

export default Calculator;