import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components' ;

import CodeBlock from './CodeBlock.js' ;

const Wrapper = styled.div`
  padding: 2rem;
  img {
    width: 100%;
    border-radius: 0.5rem;
  }
  a {
   color: ${props => props.theme.link};
   text-decoration: none;
  }
  blockquote {
    background-color: ${props => props.theme.highlightBg};
    border-radius: 0.5rem;
    margin: 0;
    overflow: hidden;
    p {
      padding: 1rem;
      margin: 0;
      border-left: 6px solid ${props => props.theme.selected};
    }
  }
  table {
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    border: 2px solid ${props => props.theme.sidebarBg};
    thead {
      text-align: left;
      background-color: ${props => props.theme.sidebarBg};
    }
    th, td {
      padding: 0.5rem;
    }
    td {
      border: 2px solid ${props => props.theme.sidebarBg};
    }
  }
  ul, ol {
    padding: 1rem;
    margin: 0;
    li {
      padding-left: 0.5rem;
      &::marker {
        color: ${props => props.theme.link};
      }
    }
  }
  hr {
    border: none;
    border-top: 2px solid ${props => props.theme.highlightBg};
    color: ${props => props.theme.comment};
  }
  h2, h3, h4, h5, h6 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  h1 {
    margin-top: 0;
    margin-bottom: 1rem;
    &:after {
      display: block;
      margin-top: 0.5rem;
      width: 100%;
      content: " ";
      height: 2px;
      background-color: ${props => props.theme.sidebarBg}; 
    }
  }
  pre {
    background-color: ${props => props.theme.name === "dark" ? props.theme.sidebarBg : "none"} !important;
  }
  code {
    font-family: "IBM Plex Mono", monospace !important;
    background-color: ${props => props.theme.sidebarBg};
    padding: 0.25rem ;
    border-radius: 0.25rem;
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

