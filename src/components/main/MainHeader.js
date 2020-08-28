import React, { useContext } from 'react' ;
import styled, { ThemeContext } from 'styled-components' ;
import { Edit, Eye, Trash, Moon, Sun } from 'react-feather' ;

import Button from '../Button.js';

const Wrapper = styled.div`
  height: 3rem;
  position: fixed;
  padding: 0.5rem 1rem;
  width: calc(100% - 300px);
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.background};
  box-shadow: 0px 4px 2px -2px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  z-index: 999;
`

const NoteTools = styled.div`
  display: flex;
`

const AlertButton = styled(Button)`
  color: tomato;
`
const ThemeButton = styled(Button)`
  align-self: end;
`
const MainHeader = ({ toggleMode, toggleTheme, mode, deleteSelectedNote }) => {

  // getting the theme
  const themeContext = useContext(ThemeContext) ;

  return (
    <Wrapper>
      <NoteTools>
        <Button handleClick={toggleMode} >
          { mode==='preview' ? ( 
            <Edit  /> 
          ) : ( 
            <Eye /> 
          )}
        </Button>
        <AlertButton handleClick={deleteSelectedNote} >
          <Trash /> 
        </AlertButton> 
      </NoteTools>
      <div>
        <ThemeButton handleClick={toggleTheme}>
          { themeContext.name === 'dark' ? ( 
            <Sun  /> 
          ) : ( 
            <Moon /> 
          )}
        </ThemeButton> 
      </div>
    </Wrapper>
  )
}

export default MainHeader ;
