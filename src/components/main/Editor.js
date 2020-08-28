import React from 'react' ;
import styled from 'styled-components' ;

import TextareaAutosize from 'react-textarea-autosize';

const Wrapper = styled.div`
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
`

const ThemedTextarea = styled(TextareaAutosize)`
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.background};
`

class Editor extends React.Component {
  constructor(props){
    super(props);
    this.myRef = React.createRef();
  }

  // Autofocus after component is mounted
  componentDidMount() {
    this.myRef.current._ref.focus();
  }

  // Autofocus every time the component is updated
  componentDidUpdate() {
    this.myRef.current._ref.focus();
  }

  render(){
    return (
      <Wrapper>
        <ThemedTextarea value={this.props.text}
                        ref={this.myRef}
                        onChange={this.props.handleChange} />
      </Wrapper>
    )
  }
}

export default Editor;
