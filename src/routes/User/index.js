

import React from 'react';
import storageHelper from 'Utils/storageHelper';
import Login from './Login';
import Profile from './Profile';

class User extends React.Component {

    render() {
        const isLogin = storageHelper.isLogin();
        if (!isLogin) return <Login />
        return <Profile />
    }

}

export default User;