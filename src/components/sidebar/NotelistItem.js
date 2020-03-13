import React from 'react';
import styled from 'styled-components' ;

const Wrapper = styled.li`
  color: gray;
  padding: 9px 18px;
  border-bottom: 1px solid lightgray;
`
const Date = styled.div`
  font-size: 0.8rem;
`

const NotelistItem = ({ id, text, date, selectNote, selectedID, className }) => {
  const noteTitle = text.match(/^(.*)/g)[0].replace(/#/, '');
  return (
    <Wrapper className={className} onClick={function(){selectNote(id)}}>
      <div className='note-title'>{noteTitle}</div>
      <div className='note-info'>
        <Date>{date}</Date>
      </div>
    </Wrapper>
  );
}
 export default NotelistItem;
