import React from 'react' ;
import { useColorMode } from 'theme-ui' ;
import theme from '../../theme/theme.js' ;
import { Edit, Eye, Trash, Moon, Sun } from 'react-feather' ;
import styled from 'styled-components' ;

import Button from '../Button.js';

const Wrapper = styled.div`
  height: 48px;
  position: fixed;
  padding: 9px 18px;
  box-sizing: border-box;
  width: calc(100% - 300px);
  background-color: white;
  box-shadow: 0px 4px 2px -2px rgba(0, 0, 0, 0.25);
  display: flex;
`

const AlertButton = styled(Button)`
  && {
    color: tomato;
  }
`
const ThemeButton = styled(Button)`
  justify-self: end;
`
const MainHeader = ({ toggleMode, mode, deleteSelectedNote }) => {
  const [colorMode, setColorMode] = useColorMode() ;

  return (
    <Wrapper>
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
      <Button handleClick={e => {setColorMode(colorMode === 'default' ? 'dark' : 'default')}} >
        { colorMode === 'default' ? ( 
          <Moon  /> 
        ) : ( 
          <Sun /> 
        )}
      </Button> 
    </Wrapper>
  )
}

export default MainHeader ;
