import React, { Component } from 'react';
import { PageHeader, Divider } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { contentChange } from '../action';
import { selectContent } from '../reselector';
import WangEditor from '@/components/Editor';
import { Wrapper } from '@/components/Style';


class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: '',
    } 
  }
  handleChangeContent = (content) => {
    this.props.contentChange(content);
  }
  setCurrentEditor = (editor) => {
    this.setState({
      ...this.state,
      editor,
    })
  }
  render() {
    const { content } = this.props;
    if (content && this.state.editor) this.state.editor.txt.html(content);
    return (
      <Wrapper>
        <PageHeader
          onBack={() => window.history.back()}
          title="富文本编辑器"
          subTitle={(
            <div>
              <a href="http://www.wangeditor.com/index.html" target="_black">wangeditor</a>
              <Link to="/plugins/editor/preview" style={{ marginLeft: '20px' }}> 预览 </Link>
            </div>
          )}
        />
        <WangEditor
          setCurrentEditor={this.setCurrentEditor}
          handleChangeContent={this.handleChangeContent}
        />
      </Wrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    content: selectContent(state),
    // hi: selectHi(state),
    // count: selectCount(state),
  };
}
const mapActionsToProps = (dispatch) => bindActionCreators({ ...{contentChange} }, dispatch);
export default connect(mapStateToProps, mapActionsToProps)(Edit);