import React from 'react' ;
import { Plus } from 'react-feather' ;

const SidebarHeader = ({ addNote }) => ( 
  <div className='sidebar-header'>
    <div  className='button' 
          onClick={addNote} >
        <Plus />
    </div>
  </div>
)


export default SidebarHeader ;
