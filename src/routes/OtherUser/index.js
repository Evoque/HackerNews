import React from 'react';
import {connect} from 'dva';
import Profile from 'Components/Profile';

class OtherUser extends React.Component {

    componentDidMount() { 
        const {by} = this.props.match.params;
        if (by) {
            this.props.dispatch({type: 'modelGlobal/QUERY_OTHER_USER', payload: {by}});
        }
    }

    render() {
        const {otherUser} = this.props;
        return <Profile userInfo={otherUser} />
    }
}

export default connect(({modelGlobal}) => ({otherUser: modelGlobal.otherUser}))(OtherUser);