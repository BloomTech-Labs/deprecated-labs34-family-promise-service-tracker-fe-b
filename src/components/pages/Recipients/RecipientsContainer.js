import React from 'react';
import RenderRecipientsPage from './RenderRecipientsPage';
import { TableComponent } from '../../common';
import TitleComponent from '../../common/Title';

function RecipientsContainer() {
  return (
    <div>
      <center>
        <TitleComponent TitleText="Recipients" />
      </center>
      <div className="sub-header">
        <RenderRecipientsPage />
      </div>
      <div className="tablectn">
        <TableComponent />
      </div>
    </div>
  );
}

export default RecipientsContainer;
