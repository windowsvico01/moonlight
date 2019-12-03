import React, { Component } from 'react';
import { Layout, Menu, Icon, Slider } from 'antd';
import { withRouter } from 'react-router-dom';
// import { modules } from '@/routes/index';
import { menuMap } from '@/utils/permission';
const { SubMenu } = Menu;
const { Sider } = Layout;

class MSider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inlineCollapsed: false,
    }
  }
  toggleCollapsed = () => {
    this.setState({
      ...this.state,
      inlineCollapsed: !this.state.inlineCollapsed,
    });
  }
  checkHasChild = (menu) => {
    if (menu.child && menu.child.length) {
      let hasShowChild = false;
      menu.child.forEach((item) => {
        if (item.show) hasShowChild = true;
      })
      return hasShowChild;
    }
    return false;
  }
  render() {
    const { inlineCollapsed } = this.state;
    return (
      <Sider
        width={250}
        style={{ background: '#fff' }}
        // collapsible
        collapsed={inlineCollapsed}
      >
        <Menu
          mode="inline"
          // inlineCollapsed={true}
        >
          {menuMap && menuMap.length && menuMap.map(item => {
            const tMenu = (menu) => {
              if (this.checkHasChild(menu)) {
                return (
                  <SubMenu
                    key={menu.key}
                    title={(
                      <span>
                        {menu.icon && (<Icon type={menu.icon} style={{ verticalAlign: '0.1em' }} theme="twoTone"/>)}
                        <span>{menu.label}</span>
                      </span>
                    )}
                  >
                    {menu.child.map(cMenu => tMenu(cMenu))}
                  </SubMenu>
                )
              } else {
                return menu.show ? (
                  <Menu.Item key={menu.key} onClick={() => this.props.history.push(menu.path)}>
                    <span>
                      {menu.icon  && <Icon type={menu.icon} style={{ verticalAlign: '0.1em' }} theme="twoTone"/>}
                      <span>{menu.label}</span>
                    </span>
                  </Menu.Item>
                ) : '';
              }
            };
            return tMenu(item);
          })}
          <div style={{ width: '100%', height: '40px', lineHeight: '40px', textAlign: 'center' }}>
            <a onClick={()=>this.toggleCollapsed()}>{inlineCollapsed ? <Icon type="right-square" theme="twoTone" /> : <Icon type="left-square" theme="twoTone" />}</a>
          </div>
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(MSider);

