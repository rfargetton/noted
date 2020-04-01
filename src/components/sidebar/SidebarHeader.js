import React from 'react' ;
import styled from 'styled-components' ;
import { Plus } from 'react-feather' ;

import Button from '../Button.js';

const Wrapper = styled.div`
  height: 48px;
  position: fixed;
  padding: 9px 18px;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.background};
  width: 300px;
  box-shadow: 4px 4px 2px -2px rgba(0, 0, 0, 0.25);
`

const SidebarHeader = ({ addNote }) => ( 
  <Wrapper>
    <Button handleClick={addNote} >
      <Plus />
    </Button>
  </Wrapper>
)


export default SidebarHeader ;
