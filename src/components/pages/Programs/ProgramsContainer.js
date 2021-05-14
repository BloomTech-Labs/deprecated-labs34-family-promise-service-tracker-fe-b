import React from 'react';
import RenderProgramsPage from './RenderProgramsPage';
import TitleComponent from '../../common/Title';
import ProgramTable from '../../common/ProgramsTable/ProgramTable';

function ProgramsContainer() {
  return (
    <div>
      <center>
        <TitleComponent TitleText="Programs" />
      </center>
      <div className="sub-header">
        <RenderProgramsPage />
      </div>
      <div>
        <ProgramTable />
      </div>
    </div>
  );
}

export default ProgramsContainer;
