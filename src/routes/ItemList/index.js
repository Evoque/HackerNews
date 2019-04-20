import React from 'react';
import {connect} from 'dva';
import Item from 'Components/Item';
import Skeleton from 'Components/Skeleton';

 class ItemList extends React.Component {

    render() {

        const {stories = []} = this.props;
        const firstLoad = stories.length === 1 && !stories[0]
        return firstLoad ?
            <Skeleton /> :
            stories.map(x => <Item key={x.id} item={x} />);
    }

}



export default connect(
    ({modelGlobal}) => ({
        stories: modelGlobal.stories
    })
)(ItemList);