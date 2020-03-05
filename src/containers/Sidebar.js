import React from 'react';

import Notelist from '../components/sidebar/Notelist.js';
import SidebarHeader from '../components/sidebar/SidebarHeader.js';

class NoteSidebar extends React.Component {

  render(){
    return (
      <aside className="sidebar">
        <SidebarHeader  addNote={this.props.addNote}/>
        <Notelist     notes={this.props.notes} 
                      selectedID={this.props.selectedID}
                      selectNote={this.props.selectNote}/>
      </aside>
    );
  }

}

export default NoteSidebar;
