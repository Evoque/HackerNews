

import React from 'react';
import {router} from 'dva';
import Header from 'Components/Header';
import ItemList from './../ItemList';
import Item from '../Item';
import User from './../User';
import OtherUser from './../OtherUser';
import styles from './index.less';

const {Route, Switch} = router;
class Home extends React.Component {

    render() {
        const {type} = this.props.match.params;
        return (
            <div>
                <Header type={type} />
                <div className={styles.storyContainer}>
                    <div className={styles.storyContent}>
                        <Switch>
                            <Route path="/user" component={() => <User />} />
                            <Route path="/profile/:by" component={props => <OtherUser {...props} />} />
                            <Route path="/item/:id" component={props => <Item {...props} /> } />
                            <Route path="/" component={props => <ItemList {...props} type={type} />} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
