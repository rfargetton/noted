import React from 'react' ;
import styled from 'styled-components' ;
import { Plus } from 'react-feather' ;

import Button from '../Button.js';

const Wrapper = styled.div`
  height: 3rem;
  position: fixed;
  padding: 0.5rem 1rem;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.background};
  width: 300px;
  box-shadow: 4px 4px 2px -2px rgba(0, 0, 0, 0.25);
  z-index: 999;
`

const SidebarHeader = ({ addNote }) => ( 
  <Wrapper>
    <Button handleClick={addNote} >
      <Plus />
    </Button>
  </Wrapper>
)


export default SidebarHeader ;
