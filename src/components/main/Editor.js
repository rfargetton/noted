import React from 'react' ;
import styled from 'styled-components' ;

import TextareaAutosize from 'react-textarea-autosize';

const Wrapper = styled.div`
  margin-top: 48px;
  padding: 18px;
  textarea {
    font-family: monospace;
    border: 0;
    resize: none;
    font-size: 1rem;
    width: 100%;
`

const Editor = ({text, handleChange}) => {
  return (
    <Wrapper>
      <TextareaAutosize value={text}
                        onChange={handleChange} />
    </Wrapper>
  )
}

export default Editor;
