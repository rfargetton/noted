import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components' ;

const Wrapper = styled.div`
  margin-top: 48px;
  padding: 18px;
`

const Previewer = ({text}) => {
  return (
    <Wrapper>
      <ReactMarkdown source={text} />
    </Wrapper>
  )
}

export default Previewer;

