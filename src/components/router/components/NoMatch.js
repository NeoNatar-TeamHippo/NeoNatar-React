import React from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';

import { NO_MATCH } from '../constants';
import history from '../../history/History';

const NoMatch = ({ location }) => message.error(
    <div>
        {`${NO_MATCH} ${location.pathname}`}
    </div>, 5
) && setTimeout(() => {
    history.goBack();
}, 2000);

NoMatch.propTypes = {
    location: PropTypes.objectOf(PropTypes.object()).isRequired,
};

export default NoMatch;
