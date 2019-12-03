import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Alert } from 'antd';
import styled from 'styled-components';
import { permissionMap } from '@/utils/permission.js';
const BreadWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 0 24px 15px 0;
`;
const Bread = (props) => {
  const { location } = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const pathArr = pathSnippets.slice(0, index + 1);
      const url = `/${pathArr.join('/')}`;
      let perName = '';
      pathArr.forEach((item, index) => {
        if (index === 0) perName += item.charAt(0).toUpperCase() + item.slice(1);
        else perName += '/' + item.charAt(0).toUpperCase() + item.slice(1);      
      })
      return (
        permissionMap[perName] ?
        <Breadcrumb.Item key={url}>
          { !permissionMap[perName].disabled ? <Link to={url}>{permissionMap[perName].label}</Link> : <span>{permissionMap[perName].label}</span>}
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