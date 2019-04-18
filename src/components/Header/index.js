import React from 'react';
import {Menu} from "antd";
import styles from './index.less';

export default class Header extends React.Component {
  state = {
    current: "top"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div className={styles.headerContainer}>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="mail" className={styles.logo}>
            <img src="assets/y18.gif" alt="logo" />
          </Menu.Item>
          <Menu.Item key="Top">Top</Menu.Item>
          <Menu.Item key="New">New</Menu.Item>
          <Menu.Item key="Show">Show</Menu.Item>
          <Menu.Item key="Ask">Ask</Menu.Item>
          <Menu.Item key="Jobs">Jobs</Menu.Item>
        </Menu>
      </div>

    );
  }
}
