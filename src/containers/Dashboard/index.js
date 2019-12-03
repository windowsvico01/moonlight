import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import { Button, Avatar, Menu, Dropdown, Icon, Breadcrumb, Alert } from 'antd';

import Header from '@/components/Header';
import MSider from '@/components/Sider';
import Bread from '@/components/Bread';
const { Content } = Layout;
class Dashboard extends Component {

  render() {
    const { location } = this.props;
    return (
      <Layout style={{ background: '#fff' }}>
        <Header />
        <Layout style={{ background: '#fff' }}>
          <MSider />
          <Layout style={{ background: '#fff' }}>
            <Content
              style={{
                padding: '0 0 24px 24px',
                margin: 0,
                minHeight: 280,
              }}
            >  
              <Bread location={location} />   
              { this.props.children }
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(Dashboard);