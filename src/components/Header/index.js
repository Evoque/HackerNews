import React from 'react';
import {Menu, Icon} from 'antd';
import {connect} from 'dva';
import {STORIES} from 'Common/constants';
import styles from './index.less';

const NS_QUERY_LIST = 'modelGlobal/QUERY_STORY_IDS';
class Header extends React.Component {

  componentDidMount() {
    const {currentStory, dispatch} = this.props;
    dispatch({type: NS_QUERY_LIST, payload: {type: currentStory}});
  }

  handleClick = e => {
    const {key} = e;
    if (key.indexOf('disable') !== -1) return;  
    this.props.dispatch({type: NS_QUERY_LIST, payload: {type: key}});
  };

  render() {
    const {currentStory} = this.props;
    return (
      <div className={styles.headerContainer}>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[currentStory]}
          mode="horizontal"
        >
          <Menu.Item key="logo-disable" className={styles.logo}>
            <img src="assets/y18.gif" alt="logo" />
          </Menu.Item>
          {
            STORIES.map(({value, title}) => <Menu.Item key={value}>{title}</Menu.Item>)
          }
          <Menu.Item key="user" className={styles.user}><Icon type="user" /></Menu.Item>
        </Menu>
      </div>

    );
  }
}

function mapStateToProps({modelGlobal}) {
  return {
    currentStory: modelGlobal.currentStory
  }
}

export default connect(mapStateToProps)(Header);
