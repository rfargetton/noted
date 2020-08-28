import React from 'react' ;
import styled from 'styled-components' ;
import {Controlled as CodeMirror} from 'react-codemirror2' ;
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/nord.css';

require('codemirror/mode/gfm/gfm');
require('codemirror/mode/javascript/javascript');

const Wrapper = styled.div`
  background-color: #2E3440;
  padding: 2rem;
  min-height: 100%;
  textarea {
    font-family: 'IBM Plex Mono', monospace;
    border: 0;
    resize: none;
    font-size: 1rem;
    width: 100%;
  }
  textarea:focus {
    outline: none !important;
  }
  .CodeMirror {
    font-family: 'IBM Plex Mono', monospace;
    height: 100%;
  }
`

const options = {
  mode: "gfm",
  showCursorWhenSelecting: true,
  lineWrapping: true,
  theme: "nord"
}

class Editor extends React.Component {

  render(){
    return (
      <Wrapper>
        <CodeMirror
          value={this.props.text}
          options={options}
          onChange={(editor, data, value) => { 
            console.log("controlled", {value})
          }}
          onBeforeChange={(editor, data, value) => {
            this.props.handleChange(value)
          }}
          editorDidMount={editor => {
            setTimeout(() => {
              editor.focus()
            }, 0)
            editor.setCursor(0);
          }}
        />
      </Wrapper>
    )
  }
}

export default Editor;
