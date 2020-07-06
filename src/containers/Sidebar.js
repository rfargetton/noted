import React from 'react';
import styled from 'styled-components';

import Notelist from '../components/sidebar/Notelist.js';
import SidebarHeader from '../components/sidebar/SidebarHeader.js';

const Wrapper = styled.aside`
  flex: 0 0 300px;
  height: 100vh;
  overflow: scroll;
  border-right: 1px solid lightgray;
`

class NoteSidebar extends React.Component {

  render(){
    return (
      <Wrapper>
        <SidebarHeader addNote={this.props.addNote}/>
        <Notelist     notes={this.props.notes} 
                      selectedID={this.props.selected && this.props.selected.id}
                      deleteNote={this.props.deleteNote}
                      selectNote={this.props.selectNote}/>
      </Wrapper>
    );
  }

}

export default NoteSidebar;
