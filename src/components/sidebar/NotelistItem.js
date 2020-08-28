import React from 'react';
import styled from 'styled-components' ;

const Wrapper = styled.li`
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.bg};
  padding: 9px 18px;
  cursor: pointer;
`
const Date = styled.div`
  color: ${props => props.theme.date};
  font-size: 0.8rem;
`

const NotelistItem = ({ id, text, date, selectNote, deleteNote, selectedID, className }) => {
  const noteTitle = text.match(/^(.*)/g)[0].replace(/#/, '');
  return (
    <Wrapper className={className} onClick={function(){selectNote(id)}}>
      <div className='note-title' >
        {noteTitle}
      </div> 
      <div className='note-info'> 
        <Date>{date}</Date> 
      </div> 
    </Wrapper>
  ); 
} 

export default NotelistItem;
