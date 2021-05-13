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
            name="type"
            label="Type"
            rules={[
              {
                required: true,
                message: 'Please input the Type',
              },
            ]}
          >
            <Select size="large" placeholder="Select Type">
              {programs.map(item => (
                <Select.Option key={item}>{item}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="unit"
            label="Unit"
            rules={[
              {
                required: true,
                message: 'Please enter the unit',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="quantity"
            label="Quantity"
            rules={[
              {
                required: true,
                message: 'Please enter the quantity',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="serviceProvider"
            label="Service Provider"
            rules={[
              {
                required: true,
                message: 'Please enter the service provider',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="recipient"
            label="Recipient"
            rules={[
              {
                required: true,
                message: "Please enter the recipient's name",
              },
            ]}
          >
            <Input placeholder="Enter Name" size="large" />
          </Form.Item>

          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                required: true,
                message: 'Please enter the address',
              },
            ]}
          >
            <Input placeholder="Enter Address" size="large" />
          </Form.Item>

          <Form.Item
            name="city"
            label="City"
            rules={[
              {
                required: true,
                message: 'Please enter the city',
              },
            ]}
          >
            <Input placeholder="Enter City" size="large" />
          </Form.Item>

          <Form.Item
            name="state"
            label="State"
            rules={[
              {
                required: true,
                message: 'Please enter the state',
              },
            ]}
          >
            <Input placeholder="Enter State" size="large" />
          </Form.Item>

          <Form.Item
            name="zipcode"
            label="Zip Code"
            rules={[
              {
                required: true,
                message: 'Please enter the Zipcode',
              },
            ]}
          >
            <Input placeholder="Enter Zipcode" size="large" />
          </Form.Item>

          <Form.Item
            name="date"
            label="Date"
            rules={[
              {
                required: true,
                message: 'Please enter the date',
              },
            ]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            name="status"
            label="Status"
            rules={[
              {
                required: true,
                message: 'Please enter the status',
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
