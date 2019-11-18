import React from 'react';
import styled from 'styled-components';
import { Button, Avatar, Menu, Dropdown, Icon } from 'antd';


const Bar = styled.div`
   height: 60px;
   padding: 10px 10px;
   background: #FFF;
   overflow: hidden;
   color: #0d1a26;
   margin-bottom: 24px;
   box-shadow: 0 2px 7px rgba(0,0,0,.2);
`;
const LogoCon = styled.div`
   height: 40px;
   width: 120px;
   /* text-align: center; */
   line-height: 40px;
   font-size: 20px;
   font-weight: bold;
   float: left;
   margin-left: 20px;
`;
const LogCon = styled.div`
   height: 40px;
   width: auto;
   float: right;
   .btnCon{
      height: 40px;
      line-height: 40px;
      vertical-align: center;
      Button{
        font-size: 14px;
      }
      /* .ant-btn:hover, .ant-btn:focus{
        color: #7037e8;
        border-color: #7037e8;
      } */
   }
   .personInfo{
    height: 42px;
    max-width: 150px;
    line-height: 40px;
    vertical-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
    font-size: 16px;
    .userName{
        height: 40px;
        max-width: 150px;
        margin-left: 10px;
        text-align: left;
        line-height: 40px;
        font-size: 14px;
        color: #fff;
    }
   }
`;
const MenuItem = styled.a`
    width: 100px;
    text-align: left;
    line-height: 30px;
`;
const PandaSvg = () => (
    <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
      <path
        d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z"
        fill="#6B676E"
        p-id="1143"
      />
      <path
        d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z"
        fill="#FFEBD2"
        p-id="1144"
      />
      <path
        d="M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z"
        fill="#E9D7C3"
        p-id="1145"
      />
      <path
        d="M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z"
        fill="#FFFFFF"
        p-id="1146"
      />
      <path
        d="M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z"
        fill="#6B676E"
        p-id="1147"
      />
      <path
        d="M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z"
        fill="#464655"
        p-id="1148"
      />
      <path
        d="M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
        fill="#464655"
        p-id="1149"
      />
      <path
        d="M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
        fill="#464655"
        p-id="1150"
      />
    </svg>
  );
const PandaIcon = props => <Icon component={PandaSvg} {...props} />;


const menu = (
    <Menu>
        <Menu.Item>
            <MenuItem href="http://www.baidu.com">
                <Icon type="user" theme="outlined" /> 个人中心
            </MenuItem>
        </Menu.Item>
        <Menu.Item>
            <MenuItem href="">
                <Icon type="logout" theme="outlined" /> 注销
            </MenuItem>
        </Menu.Item>
    </Menu>
);

class Header extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            loginStatus: '0',//0:未登录   1：已登录
        };
    }
    render() {
        const {loginStatus} = this.state;
        
        return (
            <Bar>
                <LogoCon><PandaIcon style={{ lineHeight: '40px', fontSize: '25px', display: 'inline-block', float: 'left', marginTop: '-3px', marginRight: '10px' }} /> MOONLT</LogoCon>
                <LogCon>
                    {loginStatus === '0' && 
                    <div className="btnCon">
                        <Button style={{marginRight:'20px'}}>登录</Button>
                        <Button>注册</Button>
                    </div>
                    }
                    {loginStatus === '1' && 
                    <Dropdown overlay={menu}>
                        <div className="personInfo" href="#">
                            <Avatar size={38} icon="user"></Avatar>
                            <span className="userName">二三四五六</span>
                        </div>
                    </Dropdown>
                    }
                </LogCon>
                
            </Bar>
        );
    }
}

export default Header;
