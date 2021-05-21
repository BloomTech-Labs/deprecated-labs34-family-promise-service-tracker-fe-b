import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import AddProgramForm from '../../forms/AddProgramForm';
import AddServiceTypeForm from '../../forms/AddServiceTypeForm';
import AddRecipientForm from '../../forms/AddRecipientForm';

function RenderProgramsDash({ addEmployeeAction }) {
  const [programVisible, setProgramVisible] = useState(false);
  const [serviceVisible, setServiceVisible] = useState(false);
  const [recipientVisible, setRecipientVisible] = useState(false);

  return (
    <>
      <div className="add-employee-btn-ctn">
        <Button
          type="primary"
          onClick={() => {
            setProgramVisible(true);
          }}
        >
          Add Program
        </Button>

        <AddProgramForm
          visible={programVisible}
          onCreate={null}
          onCancel={() => {
            setProgramVisible(false);
          }}
        />
      </div>

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
          onCreate={null}
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
          onCreate={null}
          onCancel={() => {
            setRecipientVisible(false);
          }}
        />
      </div>
    </>
  );
}

export default connect(null, {})(RenderProgramsDash);
