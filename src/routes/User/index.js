

import React from 'react';
import storageHelper from 'Utils/storageHelper';
import Login from './Login';

class User extends React.Component {


    render() {
        const isLogin = storageHelper.isLogin();
        if (!isLogin) return <Login />

        return (
            <div>hello</div>
        )
    }

}

export default User;