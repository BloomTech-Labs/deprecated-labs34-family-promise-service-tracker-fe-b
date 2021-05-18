import React, { useState } from 'react';
import styled from 'styled-components';
import { useOktaAuth } from '@okta/okta-react';
import RenderProgramsDash from './RenderProgramsDash';
import { TableComponent } from '../../common';
import ProgramTable from '../../common/ProgramsTable/ProgramTable';
import TitleComponent from '../../common/Title';

function ProgramsDashContainer() {
  return (
    <StyledContainer>
      <center>
        <TitleComponent TitleText="Program Manager Dashboard" />
      </center>
      <div className="sub-header">
        <RenderProgramsDash />
      </div>
      <div>
        <ProgramTable />
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div``;

export default ProgramsDashContainer;
