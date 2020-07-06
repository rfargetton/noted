import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components' ;

import CodeBlock from './CodeBlock.js' ;

const Wrapper = styled.div`
  margin-top: 48px;
  padding: 18px;
  img {
    width: 100%
  }
`

const Previewer = ({text}) => {
  return (
    <Wrapper>
      <ReactMarkdown source={text} renderers={{ code: CodeBlock }} />
    </Wrapper>
  )
}

export default Previewer;

