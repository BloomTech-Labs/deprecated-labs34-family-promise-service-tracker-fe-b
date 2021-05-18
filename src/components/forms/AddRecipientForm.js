import React from 'react';
import { Modal, Form, Input, Select, Checkbox } from 'antd';

function AddRecipientForm({ visible, onCreate, onCancel }) {
  const [form] = Form.useForm();
  const states = [
    'AL',
    'AK',
    'AZ',
    'AR',
    'CA',
    'CO',
    'CT',
    'DE',
    'DC',
    'FL',
    'GA',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MD',
    'MA',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'OH',
    'OK',
    'OR',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY',
  ];
  const ethnicity = ['White', 'Hispanic', 'Asian', 'African American'];

  return (
    <Modal
      visible={visible}
      title="Add a New Recipient"
      okText="Add"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            console.log('recipient form values', values);
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
        name="add_recipient_form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[
            {
              required: true,
              message: 'Please input the recipient first name',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="middle"
          label="Middle Initial"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[
            {
              required: true,
              message: 'Please input the recipient last name',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Ethnicity"
          name="ethnicity"
          rules={[
            {
              required: true,
              message: 'Please select the recipient Ethnicity',
            },
          ]}
        >
          <Select placeholder="Select Ethnicity" mode="multiple" size="large">
            {ethnicity.map(item => (
              <Select.Option key={item}> {item}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          label="Phone Number"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="age"
          label="Age"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="veteranStatus"
          label="Veteran Status"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Checkbox>I am a Veteran</Checkbox>
        </Form.Item>
        <Form.Item
          name="mentalStatus"
          label="Mental Status"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Street"
          label="Street"
          rules={[
            {
              required: true,
              message: 'Please input the recipient Street Address',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="State"
          name="state"
          rules={[
            {
              required: true,
              message: 'Please select the recipient State',
            },
          ]}
        >
          <Select placeholder="Select State" mode="multiple" size="large">
            {states.map(item => (
              <Select.Option key={item}> {item}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="Zip Code"
          label="zip"
          rules={[
            {
              required: true,
              message: 'Please input the recipient zip code',
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default AddRecipientForm;
