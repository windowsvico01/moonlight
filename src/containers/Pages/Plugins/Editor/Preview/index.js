import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageHeader, Divider } from 'antd';
import { bindActionCreators } from 'redux';
import { contentChange } from '../action';
import { Wrapper } from '@/components/Style';
import { selectContent } from '../reselector';
import styled from 'styled-components';

const TxtCon = styled.div`
  width: 100%;
  height: auto;
  margin: 20px 0 0;
  padding: 15px;
`;

class Preview extends Component {
  handleChangeContent = (content) => {
    this.props.contentChange(content);
  }
  render() {
    return (
      <Wrapper>
        <PageHeader
          onBack={() => window.history.back()}
          title="预览"
        />
        <TxtCon>
          <div dangerouslySetInnerHTML={{__html: this.props.content}}></div>
        </TxtCon>
      </Wrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    content: selectContent(state),
  };
}
const mapActionsToProps = (dispatch) => bindActionCreators({ ...{contentChange} }, dispatch);
export default connect(mapStateToProps, mapActionsToProps)(Preview);