import React, { useState } from 'react';
import { addEmployeeAction } from '../../../state/actions';
import { connect } from 'react-redux';
import { Button } from 'antd';
import AddRecipientForm from '../../forms/AddRecipientForm';

function RenderRecipientsPage({ addEmployeeAction }) {
  const [visible, setVisible] = useState(false);

  const onCreate = employeeObj => {
    addEmployeeAction(employeeObj);
    setVisible(false);
  };

  return (
    <>
      <div className="add-employee-btn-ctn">
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
          }}
        >
          Add Recipient
        </Button>
        <AddRecipientForm
          visible={visible}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </div>
    </>
  );
}

// export default RenderRecipientsPage;
export default connect(null, { addEmployeeAction })(RenderRecipientsPage);
