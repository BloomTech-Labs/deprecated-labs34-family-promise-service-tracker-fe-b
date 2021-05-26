import React from 'react';
import { Modal, Form, Input, Select, DatePicker } from 'antd';

const programs = ['Prevention', 'After Care', 'Sheltering'];

function AddServiceTypeForm({ onCreate, onCancel, visible }) {
  const [form] = Form.useForm();

  return (
    <>
      <Modal
        visible={visible}
        title="Add Service Type"
        okText="Add Service Type"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then(values => {
              form.resetFields();
              console.log(values, 'VALUES');
              onCreate(values);
            })
            .catch(info => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="add_program_form_in_modal"
          initialValues={{
            modifier: 'public',
          }}
        >
          <Form.Item
            name="name"
            label="Service Name"
            rules={[
              {
                required: true,
                message: 'Please input the service name',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="program_id"
            label="Type"
            rules={[
              {
                required: true,
                message: 'Please input the Type',
              },
            ]}
          >
            {/* <Select size="large" placeholder="Select Type">
              {programs.map(item => (
                <Select.Option key={item}>{item}</Select.Option>
              ))}
            </Select> */}
            <Input />
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                required: true,
                message: 'Please enter the description',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default AddServiceTypeForm;
