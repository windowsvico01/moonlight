import React, { Component } from 'react';
import { Layout, Menu, Icon, Slider } from 'antd';
import { withRouter } from 'react-router-dom';
const { SubMenu } = Menu;
const { Sider } = Layout;

const source = [
  {
    key: 'home',
    path: '/home',
    title: '首页',
    icon: 'home',
  }, {
    key: 'charts',
    path: '/charts',
    title: '图表',
    icon: 'pie-chart',
  }, { 
    key: 'hello',
    path: '/hello',
    title: 'hello',
    icon: 'heart',
    children: [
      {
        key: 'helloList',
        path: '/hello/list',
        title: '列表页',
        icon: 'dollar',
      }, {
        key: 'helloDetail',
        path: '/hello/detail',
        title: '详情页',
        icon: 'file-text',
      }
    ]
  }, {
    key: 'hi',
    path: '/hi',
    title: 'hi页面',
    icon: 'smile',
  }
]

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
          {source.map(item => {
            const tMenu = (menu) => {
              if (menu.children && menu.children.length) {
                return (
                  <SubMenu
                    key={menu.key}
                    title={(
                      <span>
                        {menu.icon && (<Icon type={menu.icon} style={{ verticalAlign: '0.1em' }} theme="twoTone"/>)}
                        <span>{menu.title}</span>
                      </span>
                    )}
                  >
                    {menu.children.map(cMenu => tMenu(cMenu))}
                  </SubMenu>
                )
              } else {
                return (
                  <Menu.Item key={menu.key} onClick={() => this.props.history.push(menu.path)}>
                    <span>
                      {menu.icon  && <Icon type={menu.icon} style={{ verticalAlign: '0.1em' }} theme="twoTone"/>}
                      <span>{menu.title}</span>
                    </span>
                  </Menu.Item>
                )
              }
            };
            return tMenu(item);
          })}
          <div style={{ width: '100%', height: '40px', lineHeight: '40px', textAlign: 'center' }}>
            <a onClick={()=>this.toggleCollapsed()}>{inlineCollapsed ? '展开' : '合住'}</a>
          </div>
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(MSider);

