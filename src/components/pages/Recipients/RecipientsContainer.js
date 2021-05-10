import React from 'react';
import RenderRecipientsPage from './RenderRecipientsPage';
import { TableComponent } from '../../common';
import TitleComponent from '../../common/Title';

function RecipientsContainer() {
  return (
    <div>
      <div className="sub-header">
        <TitleComponent TitleText="Recipients" />
        <RenderRecipientsPage />
      </div>
      <div className="tablectn">
        <TableComponent />
      </div>
    </div>
  );
}

export default RecipientsContainer;
