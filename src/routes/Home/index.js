

import React from 'react';
import {connect} from 'dva';
import Header from 'Components/Header';
import Item from 'Components/Item';
import styles from './index.less';

class Home extends React.Component {

    render() {
        const {stories} = this.props;
        console.log(stories)
        return (
            <div>
                <Header />
                <div className={styles.storyContainer}>
                    <div className={styles.storyContent}>
                        {
                            stories.map(x => <Item key={x.id} item={x} />)
                        }
                    </div>
                </div>
            </div>
        )
    }

}


export default connect(
    ({modelGlobal}) => ({
        stories: modelGlobal.stories
    })
)(Home);