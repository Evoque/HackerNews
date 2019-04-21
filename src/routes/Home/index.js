

import React from 'react';
import { router } from 'dva'; 
import Header from 'Components/Header';
import ItemList from './../ItemList';
// import Item from '../Item';
import Login from './../User/Login';
import styles from './index.less';

const { Route, Switch } = router;  
class Home extends React.Component {

    render() { 
        return (
            <div>
                <Header />
                <div className={styles.storyContainer}>
                    <div className={styles.storyContent}>
                        {/* <ItemList /> */}
                        {/* <Item /> */}
                        {/* <Login /> */}
                        <Switch>
                            <Route path="/user" component={() => <Login /> } />
                            <Route path="/" component={() =>  <ItemList /> } /> 
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;
