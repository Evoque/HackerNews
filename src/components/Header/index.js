import React from 'react';
import { Menu, Icon } from "antd";
 

export default class Header extends React.Component {
  state = {
    current: "Top"
  };

  // handleClick = e => {
  //   console.log("click ", e);
  //   this.setState({
  //     current: e.key
  //   });
  // };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="mail" /> 
        </Menu.Item>

        <Menu.Item key="Top" >Top</Menu.Item>　　
        <Menu.Item key="New" >New</Menu.Item>
        <Menu.Item key="Show" >Show</Menu.Item>
        <Menu.Item key="Ask" >Ask</Menu.Item>
        <Menu.Item key="Jobs" >Jobs</Menu.Item>
      </Menu>
    );
  }
}
