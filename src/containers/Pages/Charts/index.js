import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as actions from './actions';
// import { selectHi, selectCount } from './reselector';
import { Helmet } from "react-helmet";
import { Title, Wrapper } from '../../../utils/style';
import { Statistic, Card, Row, Col, Icon } from 'antd';

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

class Charts extends Component {
  constructor (props) {
    super(props);
    this.state = {
      deadline: deadline,
    }
  }
  render() {
    return (
      <Wrapper>
        <Helmet>
          <title>图表</title>
        </Helmet>
        <Title>卡片</Title>
        <Row gutter={16}>
          <Col span={6}>
            <Card hoverable>
              <Statistic
                title="PV"
                value={11.28888}
                precision={2}
                valueStyle={{ color: '#3f8600', fontSize: '18px' }}
                prefix={<Icon type="arrow-up" />}
                suffix="%"
              />
            </Card>            
          </Col>
          <Col span={6}>
            <Card hoverable>
              <Statistic
                title="UV"
                value={2.28888}
                precision={2}
                valueStyle={{ color: '#cf1322', fontSize: '18px' }}
                prefix={<Icon type="arrow-down" />}
                suffix="%"
              />
            </Card>            
          </Col>
          <Col span={6}>
            <Card hoverable>
              <Statistic
                title="点赞"
                value={1128}
                valueStyle={{ fontSize: '18px' }}
                prefix={<Icon type="like" />}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card hoverable>
              <Countdown
                title="倒计时"
                value={this.state.deadline}
                valueStyle={{ fontSize: '18px' }}
                format="D 天 H 时 m 分 s 秒"
              />
            </Card>            
          </Col>
        </Row>
      </Wrapper>
    )
  }
}
// const mapStateToProps = (state) => {
//   return {
//     hi: selectHi(state),
//     count: selectCount(state),
//   };
// }
// const mapActionsToProps = (dispatch) => bindActionCreators({ ...actions }, dispatch);

export default connect(null, null)(Charts);