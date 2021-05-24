import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import { getUserAction } from '../../../state/actions';
import RenderAdminDash from './RenderAdminDash';
import { TableComponent } from '../../common';
import ProgramTable from '../../common/ProgramsTable/ProgramTable';
import TitleComponent from '../../common/Title';

function AdminDashContainer(props) {
  const { role } = props;
  const { authState, authService } = useOktaAuth();
  const [userId, setUserId] = useState(false);
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], []);

  useEffect(() => {
    let isSubscribed = true;

    memoAuthService
      .getUser()
      .then(info => {
        if (isSubscribed) {
          setUserId(info.sub);
        }
      })
      .catch(err => {
        isSubscribed = false;
        return setUserId(null);
      });
    return () => (isSubscribed = false);
  }, [memoAuthService]);

  useEffect(() => {
    props.getUserAction(userId);
  }, [userId]);

  // might not even need this once the navBar renders based on the role in Redux instead of localStorage...
  useEffect(() => {
    axiosWithAuth()
      .get(`/api/profile/${userId}`)
      .then(res => {
        localStorage.setItem('role', res.data.role);
      })
      .catch(err => {
        console.log(err);
      });
  }, [userId]);

  return role === 'administrator' ? (
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
  ) : (
    <center>
      <h1>You do not have permission to access this page.</h1>
    </center>
  );
}

const StyledContainer = styled.div`
  //border: solid 1px red;
`;

const mapStateToProps = state => {
  return {
    role: state.user.user.role,
  };
};

export default connect(mapStateToProps, { getUserAction })(AdminDashContainer);
