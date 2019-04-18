import React from 'react';
import {Menu, Icon} from "antd";
import styles from './index.less';

export default class Header extends React.Component {
  state = {
    current: "Top"
  };

  handleClick = e => {
    const {key} = e;
    if (key.indexOf('disable') !== -1) return;
    this.setState({current: key});
  };

  render() {
    return (
      <div className={styles.headerContainer}>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="logo-disable" className={styles.logo}>
            <img src="assets/y18.gif" alt="logo" />
          </Menu.Item>
          <Menu.Item key="Top">Top</Menu.Item>
          <Menu.Item key="New">New</Menu.Item>
          <Menu.Item key="Show">Show</Menu.Item>
          <Menu.Item key="Ask">Ask</Menu.Item>
          <Menu.Item key="Jobs">Jobs</Menu.Item>
          <Menu.Item key="user" className={styles.user}><Icon type="user" /></Menu.Item>
        </Menu>
      </div>

    );
  }
}
