import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { CheckboxComponent } from '../index';
import {
  Table,
  Input,
  Typography,
  Form,
  Tag,
  Space,
  Popconfirm,
  Select,
} from 'antd';
import {
  LoadingOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';

//action import
import {
  getAllServicesAction,
  getServiceByIdAction,
  addServiceAction,
  editServiceAction,
  deleteServiceAction,
  getAllProgramsAction,
} from '../../../state/actions';

const TableComponent = ({
  getAllServicesAction,
  getServiceByIdAction,
  addServiceAction,
  editServiceAction,
  deleteServiceAction,
  services,
  programs,
  change,
}) => {
  // tableData is what is consumed by the antd table on render
  const tableData = [];

  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');

  useEffect(() => {
    getAllServicesAction();
  }, [change]);

  const isEditing = record => record.key === editingKey;

  const edit = record => {
    form.setFieldsValue({
      name: '',
      status: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async serviceId => {
    try {
      const serviceObj = await form.validateFields();
      console.log('key', serviceId);
      console.log('edited Row', serviceObj);
      editServiceAction(serviceId, serviceObj);
      setEditingKey('');
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const deleteUser = key => {
    deleteServiceAction(key);
  };

  const serviceObjCreator = () => {
    if (services) {
      services.map(service => {
        let recipientName = service.firstname + ' ' + service.lastname;
        return tableData.push({
          key: service.service_entries_id,
          service_name: service.service_name,
          status: service.status,
          recipient_name: recipientName,
        });
      });
    }
  };
  serviceObjCreator();

  const columns = [
    {
      title: 'Service Name',
      dataIndex: 'service_name',
      key: 'service_name',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="service_name"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Please Input Service Name!`,
              },
            ]}
          >
            <Input defaultValue={record.service_name} />
          </Form.Item>
        ) : (
          <>{record.service_name}</>
        );
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="status"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Please Input Status!`,
              },
            ]}
          >
            <Input defaultValue={record.status} />
          </Form.Item>
        ) : (
          <>{record.status}</>
        );
      },
    },
    {
      title: 'Recipient Name',
      dataIndex: 'recipient_name',
      key: 'recipient_name',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="recipient_name"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Please Input Recipient Name!`,
              },
            ]}
          >
            <Input defaultValue={record.recipient_name} />
          </Form.Item>
        ) : (
          <>{record.recipient_name}</>
        );
      },
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Space size="middle">
              <a
                onClick={() => save(record.key)}
                style={{ color: '#1890FF', marginRight: 8 }}
              >
                Save
              </a>
              <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                <a style={{ color: '#1890FF' }}>Cancel</a>
              </Popconfirm>
            </Space>
          </span>
        ) : (
          <Space size="large">
            <Typography.Link
              disabled={editingKey !== ''}
              style={{ color: '#1890FF' }}
              onClick={() => edit(record)}
            >
              {<EditOutlined />}
            </Typography.Link>
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => deleteUser(record.key)}
              danger
            >
              {<DeleteOutlined />}
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  return (
    <>
      {tableData.length < 1 && <LoadingOutlined className="loader" />},
      {tableData.length >= 1 && (
        <Form form={form}>
          <Table
            className="desktop-table"
            columns={columns}
            dataSource={tableData}
            bordered
          />
        </Form>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    services: state.service.services,
    programs: state.program.programs,
    change: state.service.change,
  };
};

export default connect(mapStateToProps, {
  getAllServicesAction,
  getServiceByIdAction,
  addServiceAction,
  editServiceAction,
  deleteServiceAction,
  getAllProgramsAction,
})(TableComponent);
