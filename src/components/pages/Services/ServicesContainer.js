import React from 'react';
import RenderServicesPage from './RenderServicesPage';
import TitleComponent from '../../common/Title';
import ProgramTable from '../../common/ProgramsTable/ProgramTable';

function ServicesContainer() {
  return (
    <div>
      <center>
        <TitleComponent TitleText="Services" />
      </center>
      <div className="sub-header">
        <RenderServicesPage />
      </div>
      <ProgramTable />
    </div>
  );
}

export default ServicesContainer;
