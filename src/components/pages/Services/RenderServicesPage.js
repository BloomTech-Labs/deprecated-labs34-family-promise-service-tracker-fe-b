import React, { useState } from 'react';
import { Button } from 'antd';

//redux import
import {
  addServiceAction,
  addServiceTypeAction,
} from '../../../state/actions/index';
import { connect } from 'react-redux';

//component import
import AddServiceForm from '../../forms/AddServiceForm';
import AddServiceTypeForm from '../../forms/AddServiceTypeForm';

//addServiceTypeAction
function RenderServicesPage(props) {
  const [visible, setVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);

  const onCreate = values => {
    console.log('received values of form:', values);
    setVisible(false);
    props.addServiceAction(values);
  };

  const onCreateType = values => {
    console.log('received values from type', values);
    setTypeVisible(false);
    props.addServiceTypeAction(values);
  };

  return (
    <>
      <div className="add-type-btn-ctn">
        <Button
          type="primary"
          onClick={() => {
            setTypeVisible(true);
          }}
        >
          Add Service Type
        </Button>
        <AddServiceTypeForm
          visible={typeVisible}
          onCreate={onCreateType}
          onCancel={() => {
            setTypeVisible(false);
          }}
        />
      </div>

      <div className="add-type-btn-ctn">
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
          }}
        >
          Log Service
        </Button>
        <AddServiceForm
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

const mapStateToProps = state => {
  console.log(state);
  return {
    services: state.service.services,
  };
};

export default connect(mapStateToProps, {
  addServiceAction,
  addServiceTypeAction,
})(RenderServicesPage);
