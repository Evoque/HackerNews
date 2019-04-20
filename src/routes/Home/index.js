

import React from 'react';
import Header from 'Components/Header';
// import ItemList from './../ItemList';
// import Item from '../Item';
import Login from './../User/Login';
import styles from './index.less';

class Home extends React.Component {

    render() {

        return (
            <div>
                <Header />
                <div className={styles.storyContainer}>
                    <div className={styles.storyContent}>
                        {/* <ItemList /> */}
                        {/* <Item /> */}
                        <Login />
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;
