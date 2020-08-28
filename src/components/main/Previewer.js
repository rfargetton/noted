import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components' ;

import CodeBlock from './CodeBlock.js' ;

const Wrapper = styled.div`
  img {
    width: 100%
  }
  blockquote {
    background-color: lightgray;
    border-radius: 0.5rem;
    margin: 0;
    overflow: hidden;
    p {
      padding: 1rem;
      margin: 0;
      border-left: 6px solid ${props => props.theme.text};
    }
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

