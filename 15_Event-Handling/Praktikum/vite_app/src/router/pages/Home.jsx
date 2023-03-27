import { useState } from "react";
import { Layout, Menu, Breadcrumb, Form, Input, Select, Radio, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;
const { Option } = Select;

const Home = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('Anda hanya bisa upload file JPG/PNG!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Gambar harus kurang dari 2MB');
    }
    return isJpgOrPng && isLt2M;
  }

  const handleButtonClick = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);
  }

  const validateProductName = (_, value) => {
    if (value && value.length > 10) {
      return Promise.reject('Product Name tidak boleh melebihi 10 karakter!');
    }
    return Promise.resolve();
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Features</Menu.Item>
          <Menu.Item key="3">Pricing</Menu.Item>
          <Menu.Item key="4">FAQs</Menu.Item>
          <Menu.Item key="5">About</Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Create Product</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h4 className="text-center mb-4" style={{color:'black'}}>Create Product</h4>
              <p className="text-center mb-4" style={{color:'black'}}>Below is an example form built entirely with Ant Design's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
              <Form form={form} onFinish={onFinish}>
              <Form.Item
              label="Product Name"
              name="productName"
              rules={[{ required: true, message: 'Inputkan Product Name!' }]}
              >
              <Input onChange={(e) => {
                const value = e.target.value;
                if (value.length > 10) {
                  message.warning('Product Name tidak boleh melebihi 10 karakter!');
                }
              }}/>
              </Form.Item>
                <Form.Item
                  label="Product Category"
                  name="productCategory"
                  rules={[{ required: true, message: 'Pilih Product Category!' }]}
                >
                  <Select placeholder="Choose...">
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                    <Option value="option3">Option 3</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  label="Image of Product"
                  name="image"
                  valuePropName="fileList"
                  extra="Upload gambar berupa JPG/PNG dengan ukuran dibawah 2MB"
                  getValueFromEvent={normFile}
                  beforeUpload={beforeUpload}
                >
                <Upload.Dragger
                  name="files"
                  fileList={fileList}
                  onChange={(info) => {
                  setFileList(info.fileList);
                  }}
                  accept=".jpg,.png"
                  maxCount={1}
                >
                  <p className="ant-upload-drag-icon">
                <UploadOutlined />
                  </p>
                  <p className="ant-upload-text">Klik atau geser file ke area ini untuk di upload</p>
                  <p className="ant-upload-hint">Dukungan untuk unggahan tunggal. Dilarang keras mengunggah data perusahaan atau file terlarang lainnya.</p>
                </Upload.Dragger>
                </Form.Item>
                <Form.Item
                label="Product Description"
                name="productDescription"
                rules={[{ required: true, message: 'Inputkan Product Description!' }]}
                >
                <Input.TextArea rows={4} />
                </Form.Item>

                <Form.Item
                label="Product Price"
                name="productPrice"
                rules={[{ required: true, message: 'Inputkan Product Price!' }]}
                >
                <Input type="number" />
                </Form.Item>

                <Form.Item
                label="Availability"
                name="availability"
                rules={[{ required: true, message: 'Pilih product availability!' }]}
                >
                <Radio.Group>
                <Radio value="inStock">In Stock</Radio>
                <Radio value="outOfStock">Out of Stock</Radio>
                </Radio.Group>
                </Form.Item>

                <Form.Item>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
                </Form.Item>

                <Form.Item>
                <button onClick={handleButtonClick}>Generate Random Number</button>
                </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  </Content>
</Layout>
);
};

export default Home;