import React from 'react';
import RenderEmployeesPage from './RenderEmployeesPage';
import { TableComponent } from '../../common';
import TitleComponent from '../../common/Title';

function EmployeesContainer() {
  return (
    <div>
      <center>
        <TitleComponent TitleText="Employees" />
      </center>
      <div className="sub-header">
        <RenderEmployeesPage />
      </div>
      <div className="tablectn">
        <TableComponent />
      </div>
    </div>
  );
}

export default EmployeesContainer;
