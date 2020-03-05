import React from 'react';

const Notelist = ({ notes, selectNote, selectedID }) => {

  const list = notes.map(note =>
    <NotelistItem id={note.id} 
                  key={note.id} 
                  text={note.text} 
                  date={note.date}
                  selectedID={selectedID}
                  selectNote={selectNote}/>
  );

  return (
    <ul className="note-list">{list}</ul>
  );

}

const NotelistItem = ({ id, text, date, selectNote, selectedID }) => {
  const noteTitle = text.match(/^(.*)/g)[0].replace(/#/, '');
  return (
    <li className={`note-list-item ${id === selectedID ? 'selected' : ''}`}
        onClick={function(){selectNote(id)}}>
      <div className='note-title'>{noteTitle}</div>
      <div className='note-info'>
        <div className='date'>{date}</div>
      </div>
    </li>
  );
}

export default Notelist;
