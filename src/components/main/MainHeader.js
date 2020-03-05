import React from 'react' ;
import { Edit, Eye } from 'react-feather' ;

const MainHeader = ({ toggleMode, mode }) => (
  <div className='main-header'>
    <div  onClick={toggleMode} 
          className='button' >
      { mode==='preview' ? ( 
        <Edit  /> 
      ) : ( 
        <Eye /> 
      )}
    </div>
  </div>
)

export default MainHeader ;
