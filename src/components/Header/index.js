import React from 'react';
import {Menu, Icon} from 'antd';
import {connect} from 'dva';
import {router} from 'dva';
import {STORIES} from 'Common/constants';
import styles from './index.less';

const {Link} = router; 
class Header extends React.Component { 

  render() { 
    const {type} = this.props;
    return (
      <div className={styles.headerContainer}>
        <Menu selectedKeys={[type]} mode="horizontal" >
          <Menu.Item key="logo" className={styles.logo}>
            <img src="assets/y18.gif" alt="logo" />
          </Menu.Item>
          {
            STORIES.map(({value, title}) => <Menu.Item key={value}>
              <Link to={`/${value}`}>{title}</Link>
            </Menu.Item>)
          }
          <Menu.Item key="user" className={styles.user}>
            <Link to="/user"><Icon type="user" /></Link>
          </Menu.Item>
        </Menu>
      </div> 
    );
  }
}

function mapStateToProps({modelGlobal}) {
  return {
    currentStoryType: modelGlobal.currentStoryType
  }
}

export default connect(mapStateToProps)(Header);
