import React from 'react';
import styled from 'styled-components' ;

import NotelistItem from './NotelistItem.js';

const Wrapper = styled.ul`
  margin-top: 3rem;
  margin-bottom: 0; 
  list-style: none;
  padding: 0;
  position: absolute;
  bottom: 0;
  top: 0;
  width: 300px;
  overflow: auto;
  border-right: 1px solid ${props => props.theme.highlightBg};
`
const Item = styled(NotelistItem)`
  &:hover {
    background-color: ${props => props.id === props.selectedID ? props.theme.selected : props.theme.highlightBg};
  }
  color: ${props => props.theme.text};
  background-color: ${props => props.id === props.selectedID ? props.theme.selected : props.theme.bg};
`

const Notelist = ({ notes, selectNote, deleteNote, selectedID }) => {


  return (
    <Wrapper>
      {notes.map(note => {
        return ( 
          <Item 
            id={note.id} 
            key={note.id} 
            text={note.text} 
            date={note.date}
            selectedID={selectedID}
            deleteNote={deleteNote}
            selectNote={selectNote}
          /> 
        )
      })}
    </Wrapper>
  );

}

export default Notelist;
