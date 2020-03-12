/** @jsx jsx */
import React from 'react' ;
import { useColorMode, jsx } from 'theme-ui' ;
import theme from '../../theme/theme.js' ;
import { Edit, Eye, Trash, Moon, Sun } from 'react-feather' ;

const MainHeader = ({ toggleMode, mode, deleteSelectedNote }) => {
  const [colorMode, setColorMode] = useColorMode() ;

  return (
    <div className='main-header'
          sx={{ backgroundColor: 'background'}}>
      <div  onClick={toggleMode} 
            className='button' >
        { mode==='preview' ? ( 
          <Edit  /> 
        ) : ( 
          <Eye /> 
        )}
      </div>
      <div  onClick={deleteSelectedNote} 
            className='button' >
        <Trash /> 
      </div> 
      <div  onClick={e => {setColorMode(colorMode === 'default' ? 'dark' : 'default')}} 
          className='button' >
        { colorMode === 'default' ? ( 
          <Moon  /> 
        ) : ( 
          <Sun /> 
        )}
      </div> 
    </div>
  )
}

export default MainHeader ;
