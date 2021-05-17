import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import AddServiceTypeForm from '../../forms/AddServiceTypeForm';
import AddRecipientForm from '../../forms/AddRecipientForm';

function RenderServicesDash({ addEmployeeAction }) {
  const [programVisible, setProgramVisible] = useState(false);
  const [serviceVisible, setServiceVisible] = useState(false);
  const [employeeVisible, setEmployeeVisible] = useState(false);
  const [recipientVisible, setRecipientVisible] = useState(false);

  const onCreate = employeeObj => {
    addEmployeeAction(employeeObj);
    setEmployeeVisible(false);
  };

  return (
    <>
      <div className="add-employee-btn-ctn">
        <Button
          type="primary"
          onClick={() => {
            setServiceVisible(true);
          }}
        >
          Add Service
        </Button>

        <AddServiceTypeForm
          visible={serviceVisible}
          onCreate={onCreate}
          onCancel={() => {
            setServiceVisible(false);
          }}
        />
      </div>

      <div className="add-employee-btn-ctn">
        <Button
          type="primary"
          onClick={() => {
            setRecipientVisible(true);
          }}
        >
          Add Recipient
        </Button>

        <AddRecipientForm
          visible={recipientVisible}
          onCreate={onCreate}
          onCancel={() => {
            setRecipientVisible(false);
          }}
        />
      </div>
    </>
  );
}

export default connect(null, {})(RenderServicesDash);
