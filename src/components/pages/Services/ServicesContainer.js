import React from 'react';
import RenderServicesPage from './RenderServicesPage';
import TitleComponent from '../../common/Title';
import ProgramTable from '../../common/ProgramsTable/ProgramTable';

function ServicesContainer() {
  return (
    <div>
      <div className="services-header">
        <TitleComponent TitleText="Services" />
        <RenderServicesPage />
      </div>
      <ProgramTable />
    </div>
  );
}

export default ServicesContainer;
