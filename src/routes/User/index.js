

import React from 'react';
import {connect} from 'dva'; 
import Login from './Login';
import Profile from './Profile';

class User extends React.Component {

    render() {
        const {userInfo} = this.props;
        if (userInfo) return <Profile userInfo={userInfo} />;
        return <Login />;
    }

}

export default connect(({modelGlobal}) => ({userInfo: modelGlobal.userInfo}))(User);