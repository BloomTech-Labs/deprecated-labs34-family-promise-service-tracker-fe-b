import React, { useState } from 'react';
import styled from 'styled-components';
import { useOktaAuth } from '@okta/okta-react';
import RenderServicesDash from './RenderServicesDash';
import { TableComponent } from '../../common';
import ProgramTable from '../../common/ProgramsTable/ProgramTable';
import TitleComponent from '../../common/Title';

function ServicesDashContainer() {
  return (
    <StyledContainer>
      <center>
        <TitleComponent TitleText="Service Worker Dashboard" />
      </center>
      <div className="sub-header">
        <RenderServicesDash />
      </div>
      <div>
        <ProgramTable />
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  //border: solid 1px red;
`;

export default ServicesDashContainer;
