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
  getAllServiceTypesAction,
  getServiceTypeByIdAction,
  editServiceTypeAction,
  deleteServiceTypeAction,
  getAllProgramsAction,
} from '../../../state/actions';

const TableComponent = ({
  getAllServiceTypesAction,
  getServiceTypeByIdAction,
  editServiceTypeAction,
  deleteServiceTypeAction,
  serviceTypes,
  programs,
  change,
}) => {
  // tableData is what is consumed by the antd table on render
  const tableData = [];

  // const initialTagValues = {
  //   selectedTags: employees.programs,
  // };

  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');
  // const [selected, setSelected] = useState(initialTagValues);

  useEffect(() => {
    getAllServiceTypesAction();
    getAllProgramsAction();
  }, [change]);

  const isEditing = record => record.key === editingKey;

  const edit = record => {
    form.setFieldsValue({
      firstName: '',
      lastName: '',
      role: '',
      programs: [],
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async serviceTypeId => {
    try {
      const serviceTypeObj = await form.validateFields();
      console.log('key', serviceTypeId);
      console.log('edited Row', serviceTypeObj);
      editServiceTypeAction(serviceTypeId, serviceTypeObj);
      setEditingKey('');
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  // Delete functionality is on hold for now
  const deleteService = key => {
    // deleteEmployeeAction(key)
    deleteServiceTypeAction(key);
    console.log('HHHH', key);
  };

  // const { CheckableTag } = Tag;

  // const { selectedTags } = selected;

  // const handleSelected = (tag, checked) => {
  //   // const { selectedTags } = selected;
  //   const nextSelectedTags = checked
  //     ? [...selectedTags, tag]
  //     : selectedTags.filter(t => t !== tag);
  //   setSelected({ selectedTags: nextSelectedTags });
  // };

  const selectRole = role => {
    return role === 'administrator'
      ? 'Administrator'
      : role === 'program_manager'
      ? 'Program Manager'
      : role === 'service_provider'
      ? 'Service Provider'
      : role === 'unassigned'
      ? 'None'
      : role;
  };

  const userObjCreator = () => {
    if (serviceTypes) {
      serviceTypes.map(serviceType => {
        const programs = [];
        // serviceType.programs.map(program => {
        //   if (program !== null) {
        //     programs.push(program.name);
        //   }
        // });
        return tableData.push({
          key: serviceType.service_type_id,
          name: serviceType.service,
          type: serviceType.program,
          description: serviceType.description,
        });
      });
    }
  };
  userObjCreator();

  const columns = [
    {
      title: 'Service Name',
      dataIndex: 'name',
      key: 'name',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="name"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Please Input Service Type Name!`,
              },
            ]}
          >
            <Input defaultValue={record.name} />
          </Form.Item>
        ) : (
          <>{record.name}</>
        );
      },
    },
    {
      title: 'Type',
      dataIndex: 'program_id',
      key: 'type',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="program_id"
            style={{ margin: 0 }}
            rules={[
              {
                // required: true,
                // message: `Please Input type!`,
              },
            ]}
          >
            <Input defaultValue={record.type} />
          </Form.Item>
        ) : (
          <>{record.type}</>
        );
      },
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      editable: true,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Form.Item
            name="description"
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Please Input Description!`,
              },
            ]}
          >
            <Input defaultValue={record.description} />
          </Form.Item>
        ) : (
          <>{record.description}</>
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
              onConfirm={() => deleteService(record.key)}
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
            // rowSelection={CheckboxComponent(tableData)}
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
    serviceTypes: state.serviceType.serviceTypes,
    programs: state.program.programs,
    change: state.serviceType.change,
  };
};

export default connect(mapStateToProps, {
  getAllServiceTypesAction,
  getServiceTypeByIdAction,
  editServiceTypeAction,
  deleteServiceTypeAction,
  getAllProgramsAction,
})(TableComponent);
