import React from "react";
import {connect} from "dva";
import {Spin, notification} from "antd";
import Pagination from "./Pagination";
import Item from "Components/MiniItem";
import Skeleton from "Components/Skeleton";
import storageHelper from 'Utils/storageHelper';
import {STORIES} from 'Common/constants';
import styles from "./index.less";

const NS_QUERY_STORIES = "modelGlobal/QUERY_STORIES";
class ItemList extends React.Component {

  componentDidMount() {
    this.invokeQueryStoryIDs();
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.handleSaveVisitedIDs, false);
  }

  invokeQueryStoryIDs = () => {
    const {type, dispatch, modelGlobal} = this.props;
    if(!STORIES.find(x => x.value === type)) return;

    const {loadingType, loadingTime} = modelGlobal; 
    const interval = Date.now() - loadingTime;
    // 同type 10s, 不同type 5s
    let canLoading = !loadingType || interval > 10000 || (loadingType !== type && interval > 5);
    if (canLoading) {
      dispatch({type: 'modelGlobal/QUERY_STORY_IDS', payload: {type}});
      window.addEventListener('beforeunload', this.handleSaveVisitedIDs, false);
    } else {
      notification.warn({
        key: 'canLoading-warn',
        message: '您的操作过于频繁'
      });
    }
  }

  handleSaveVisitedIDs = () => {
    const {visitedIDs} = this.props.modelGlobal;
    if (visitedIDs && typeof visitedIDs === 'object') {
      storageHelper.setVisitedIDs(visitedIDs);
    }
  }

  handlePageChange = page => {
    this.props.dispatch({type: NS_QUERY_STORIES, payload: {page}});
  };

  handleItemClick = id => {
    this.props.dispatch({
      type: 'modelGlobal/saveVisitedIDs',
      payload: {id}
    });
  };
 

  render() {
    const {modelGlobal, loading} = this.props;
    const {stories = [], currentPage, pageSize, totalIDs, visitedIDs} = modelGlobal;
    const firstLoad = stories.length === 1 && !stories[0];
    const spinning = !firstLoad && loading.effects[NS_QUERY_STORIES];
    return (
      <Spin spinning={spinning}>
        <div className={styles.listContainer}>
          {firstLoad ? (
            <Skeleton />
          ) : (
              stories
                .map(x => (
                  <Item key={x.id}
                    item={x}
                    visited={visitedIDs[x.id]}
                    onItemClick={this.handleItemClick} 
                  />
                ))
                .concat(
                  <Pagination
                    key="pager"
                    current={currentPage}
                    pageSize={pageSize}
                    total={totalIDs.length}
                    onChange={this.handlePageChange}
                  />
                )
            )}
        </div>
      </Spin>
    );
  }
}

export default connect(({modelGlobal, loading}) => ({
  modelGlobal,
  loading
}))(ItemList);
