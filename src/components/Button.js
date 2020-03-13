import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 30px;
  color: black;
  background-color: white;
  height: 30px;
  display: flex;
  padding: 4px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 9px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
`

export default (props) => {
  return (
    <Wrapper  className={props.className} 
              onClick={props.handleClick}>
      {props.children}
    </Wrapper>
  )
}