import React, { Component } from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 0.1px;
  position: relative;  
`;
const BgContainer = styled.div`
  width: 400px;
  height: 230px;
  position: absolute;
  top: 50%;
  margin-top: -100px;
  left: 50%;
  margin-left: -215px;
  box-sizing: border-box;
  p {
    width: 400px;
    height: 25px;
    line-height: 30px;
    text-align: center;
  }
`;
const Timer = styled.span`
  color: red;
  padding: 0 10px 0 0;
`;
const Bg404 = styled.div`
  width: 400px;
  height: 200px;
  background-image: url(http://p6.qhimg.com/t01c0d7061aa4bb0be8.png);
  background-size: 100% 100%; 
`;
class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 6,
    }
  }
  componentDidMount () {
    this.handerSetTimer();
  }
  handerSetTimer = () => {
    const timer = setInterval(() => {
      const tCount = this.state.count;
      if ( tCount > 1 ) {
        this.setState({
          count: tCount - 1,
        })
      } else {
        this.props.history.push('/home');
        clearInterval(timer);
      }
    }, 1000);
  }
  render() {
    return (
      <Wrapper> 
        <BgContainer>
          <Bg404 />
          <p>
            出现错误！
            <Timer>{ this.state.count || '' }</Timer>
            秒后返回首页
          </p>
        </BgContainer>
      </Wrapper>
    )
  }
}

export default NotFound;