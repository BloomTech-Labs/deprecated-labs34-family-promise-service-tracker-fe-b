import React, { useState } from 'react';
import styled from 'styled-components';
import { useOktaAuth } from '@okta/okta-react';
import RenderAdminDash from './RenderAdminDash';
import { TableComponent } from '../../common';
import ProgramTable from '../../common/ProgramsTable/ProgramTable';
import TitleComponent from '../../common/Title';

function AdminDashContainer() {
  return (
    <StyledContainer>
      <center>
        <TitleComponent TitleText="Admin Dashboard" />
      </center>
      <div className="sub-header">
        <RenderAdminDash />
      </div>
      <div>
        <TableComponent />
        <ProgramTable />
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  //border: solid 1px red;
`;

export default AdminDashContainer;
