import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Alert } from 'antd';
import styled from 'styled-components';
import breadcrumbNameMap from './config';
const BreadWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 0 24px 15px 0;
`;
const Bread = (props) => {
  const { location } = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      return (
        breadcrumbNameMap[url] ?
        <Breadcrumb.Item key={url}>
          { !breadcrumbNameMap[url].disabled ? <Link to={url}>{breadcrumbNameMap[url].name}</Link> : <span>{breadcrumbNameMap[url].name}</span>}
        </Breadcrumb.Item> : ''
      );
    })
    const breadcrumbItems = [
      <Breadcrumb.Item key="Dasboard">
        <Link to="/">Moon</Link>
      </Breadcrumb.Item>
    ].concat(extraBreadcrumbItems);

    return (
      <BreadWrapper>
        <Alert
          message={
            <Breadcrumb>{breadcrumbItems}</Breadcrumb>
          }
          type="info"
          closable
          closeText="Close Now"
        /> 
      </BreadWrapper>           
    )
}

export default Bread;