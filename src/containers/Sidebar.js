import React from 'react';
import styled from 'styled-components';

import NoteList from '../components/sidebar/NoteList.js';
import SidebarHeader from '../components/sidebar/SidebarHeader.js';

const Wrapper = styled.aside`
  background-color: ${props => props.theme.sidebarBg};
  flex: 0 0 300px;
  height: 100vh;
  overflow: auto;
`

class NoteSidebar extends React.Component {

  render(){
    return (
      <Wrapper>
        <SidebarHeader addNote={this.props.addNote}/>
        <NoteList     notes={this.props.notes} 
                      selectedID={this.props.selected && this.props.selected.id}
                      deleteNote={this.props.deleteNote}
                      selectNote={this.props.selectNote}/>
      </Wrapper>
    );
  }

}

export default NoteSidebar;
