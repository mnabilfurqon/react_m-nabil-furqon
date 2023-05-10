import { useMutation, useQuery } from "@apollo/client";
import {
  Button,
  Form,
  Input,
  Popconfirm,
  Space,
  Table,
  Typography,
  message,
} from "antd";
import React, { useEffect, useState } from "react";
import Gap from "../../components/gap/Gap";
import { INITIAL_TABLE_DATA } from "./constants";
import {
  ADD_USER,
  DELETE_USER,
  GET_USERS,
  UPDATE_USER,
} from "./query/users-query";

const KriktikSaran = () => {
  const { Title } = Typography;
  const { TextArea } = Input;
  const [formBio] = Form.useForm();

  // Get Data
  const {
    data: usersData,
    loading: isUsersLoading,
    error: usersError,
  } = useQuery(GET_USERS);

  // Add Data
  const [addUser, { loading: loadingAddUser }] = useMutation(ADD_USER, {
    refetchQueries: [GET_USERS],
  });

  // Update Data
  const [updateUser, { loading: loadingUpdateUser }] = useMutation(
    UPDATE_USER,
    {
      refetchQueries: [GET_USERS],
    }
  );

  // Delete Data
  const [deleteUser, { loading: loadingDelete }] = useMutation(DELETE_USER, {
    refetchQueries: [GET_USERS],
  });

  const [rowData, setRowData] = useState();
  const [isEdit, setIsEdit] = useState(false);

  const TABLE_COLUMNS = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Saran",
      dataIndex: "saran",
      key: "saran",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) =>
        INITIAL_TABLE_DATA.length >= 1 ? (
          <Space>
            <Button type="primary" onClick={() => handleEdit(record)}>
              Edit
            </Button>
            <Popconfirm
              title="Yakin mau dihapus?"
              arrow={false}
              onConfirm={() => onDelete(record.uuid)}
            >
              <Button type="primary">Delete</Button>
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];

  // Edit Button
  const handleEdit = (row_data) => {
    setRowData(row_data);
    setIsEdit(true);
    formBio.setFieldsValue({
      firstName: row_data.firstName,
      lastName: row_data.lastName,
      saran: row_data.saran,
    });
  };

  // Cancel button
  const handleCancel = () => {
    setRowData();
    setIsEdit(false);
    formBio.resetFields();
  };

  // Create Data ke tabel
  const onAdd = (values) => {
    const body = {
      ...values,
    };
    addUser({
      variables: {
        object: {
          ...body,
        },
      },
      onError: (err) => {
        message.open({
          type: "error",
          content: `${err?.message}`,
        });
      },
      onCompleted: () => handleCancel(),
    });
  };

  // Delete Data dari tabel
  const onDelete = (row_id) => {
    deleteUser({
      variables: { uuid: row_id },
      onError: (err) => {
        message.open({
          type: "error",
          content: `${err?.message}`,
        });
      },
    });
  };

  // Edit Data dari table
  const onEdit = (values) => {
    const uuid = rowData.uuid;
    const body = {
      ...values,
    };

    updateUser({
      variables: { pk_columns: { uuid: uuid }, _set: { ...body } },
      onCompleted: () => {
        handleCancel();
      },
      onError: (err) => {
        message.open({
          type: "error",
          content: `${err?.message}`,
        });
      },
    });
  };

  useEffect(() => {
    if (usersError) {
      message.open({
        type: "error",
        content: `${usersError?.message}`,
      });
    }
  }, [usersError]);

  return (
    <>
      <Title>Kritik dan Saran</Title>
      {/* Form */}
      <Form
        name="form-bio"
        form={formBio}
        layout="horizontal"
        onFinish={isEdit ? onEdit : onAdd}
        colon={false}
        style={{
          width: "800px",
        }}
        labelAlign="left"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
      >
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[
            {
              required: true,
              message: "Please input your first name!",
            },
          ]}
        >
          <Input placeholder="Input your first name" />
        </Form.Item>

        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[
            {
              required: true,
              message: "Please input your last name!",
            },
          ]}
        >
          <Input placeholder="Input your last name" />
        </Form.Item>

        <Form.Item
          name="saran"
          label="Saran"
          rules={[
            {
              required: true,
              message: "Please input your kriktik & saran!",
            },
          ]}
        >
          <TextArea rows={4} placeholder="Input your kriktik & saran" />
        </Form.Item>

        {isEdit ? (
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              loading={loadingUpdateUser}
            >
              Save
            </Button>
            <Button type="primary" onClick={handleCancel} danger>
              Cancel
            </Button>
          </Space>
        ) : (
          <Button type="primary" htmlType="submit" loading={loadingAddUser}>
            Submit
          </Button>
        )}
      </Form>

      <Gap height={30} />

      <Table
        rowKey="uuid"
        columns={TABLE_COLUMNS}
        dataSource={usersData?.users}
        loading={isUsersLoading || loadingDelete}
      />
    </>
  );
};

export default KriktikSaran;
