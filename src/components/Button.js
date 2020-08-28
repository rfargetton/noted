import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 30px;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.highlightBg};
  height: 30px;
  display: flex;
  padding: 4px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 9px;
  cursor: pointer;
`

export default (props) => {
  return (
    <Wrapper  className={props.className} 
              onClick={props.handleClick}>
      {props.children}
    </Wrapper>
  )
}
