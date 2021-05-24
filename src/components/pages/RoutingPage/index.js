import React, { useState, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import { getUserAction } from '../../../state/actions';

function RoutingPage(props, { LoadingOutlined }) {
  const { role } = props;
  const { authState, authService } = useOktaAuth();
  const [userId, setUserId] = useState(false);
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], []);

  const history = useHistory();

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

  useEffect(() => {
    if (role === 'administrator') {
      history.push('/adminDash');
    } else if (role === 'service_provider') {
      history.push('/servicesDash');
    } else if (role === 'program_manager') {
      history.push('/programsDash');
    }
  }, [role]);

  return (
    <div>
      <center>
        <h1>Loading. One moment please...</h1>
      </center>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    role: state.user.user.role,
  };
};

export default connect(mapStateToProps, { getUserAction })(RoutingPage);
