import React from 'react';
import RenderServicesPage from './RenderServicesPage';
import TitleComponent from '../../common/Title';
import ServiceTable from '../../common/ServicesTable/ServiceTable';

function ServicesContainer() {
  return (
    <div>
      <center>
        <TitleComponent TitleText="Services" />
      </center>
      <div className="sub-header">
        <RenderServicesPage />
      </div>
      <ServiceTable />
    </div>
  );
}

export default ServicesContainer;
