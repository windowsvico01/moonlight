import React from 'react';
import E from 'wangeditor';

class Editor extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            editorContent: '',
        };
    }
    componentDidMount() {
        const elem = this.refs.editorElem;
        const editor = new E(elem);
        // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
        editor.customConfig.onchange = html => {
            this.setState({
              editorContent: html
            })
            this.props.handleChangeContent(html);
          }
        editor.create()
        this.props.setCurrentEditor(editor);
    }
    render() {
        return (
            <div style={{ marginTop: '15px' }}>
              <div ref="editorElem"></div>
            </div>
        );
    }
}

export default Editor;