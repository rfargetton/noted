import React from 'react';
import styled from 'styled-components' ;

import NotelistItem from './NotelistItem.js';

const Wrapper = styled.ul`
  margin-top: 48px;
  list-style: none;
  padding: 0;
`
const Item = styled(NotelistItem)`
  &:hover {
    background-color: ${props => props.id === props.selectedID ? 'gray' : 'lightgray'};
  }
  background-color: ${props => props.id === props.selectedID ? 'gray' : 'white'};
  color: ${props => props.id === props.selectedID ? 'white' : 'gray'};
`

const Notelist = ({ notes, selectNote, selectedID }) => {

  const list = notes.map(note =>
    <Item id={note.id} 
          key={note.id} 
          text={note.text} 
          date={note.date}
          selectedID={selectedID}
          selectNote={selectNote}/>
  );

  return (
    <Wrapper>
      {list}
    </Wrapper>
  );

}

export default Notelist;
