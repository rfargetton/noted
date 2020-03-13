import React from 'react';
import { ThemeProvider } from 'theme-ui' ;
import theme from '../theme/theme.js' ;
import styled from 'styled-components' ;

import Sidebar from './Sidebar.js';
import Main from './Main.js';

const Container = styled.div`
  display: flex;
  height: 100vh;
`

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notes : localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [],
      selected : {}
    };

    this.selectNote = this.selectNote.bind(this);
    this.addNote = this.addNote.bind(this);
    this.deleteSelectedNote = this.deleteSelectedNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.updateSelected = this.updateSelected.bind(this);
  }

  componentDidMount(){

    this.setState({
      selected : this.state.notes.length > 0 ? this.state.notes[this.state.notes.length - 1] : {}
    });

    window.addEventListener('beforeunload', this.editNote );

    this.autoSave = setInterval(
      () => this.editNote(),
      10000
    );

  }

  componentWillUnmount(){

    window.removeEventListener('beforeunload', this.editNote );
  }

  _getNote(id){
    return this.state.notes.find( note => note.id === id);
  }

  _getNoteIndex(id){
    return this.state.notes.findIndex(note => note.id === id);
  }

  _commit(){
    localStorage.setItem('notes', JSON.stringify(this.state.notes));
  }

  editNote(){
    const noteIndex = this._getNoteIndex(this.state.selected.id);
    const note = this.state.selected;
    this.setState((state) => ({
      notes : [...state.notes.slice(0, noteIndex), note, ...state.notes.slice(noteIndex + 1)]
    }), this._commit );
  }

  addNote(){
    
    if(this.state.notes.length > 0) {
      this.editNote()
    }

    const date = new Date();
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();

    const text = "# Untitled";

    const note = {
      id : this.state.notes.length > 0 ? this.state.notes[this.state.notes.length - 1].id + 1 : 1,
      text : text, 
      date : `${dd} - ${mm} - ${yyyy}`,
      length : text.length
    }
    this.setState((state) => ({
      notes : [...state.notes, note ], 
      selected: note 
    }), this._commit );

  }

  deleteSelectedNote(){
    const noteIndex = this._getNoteIndex(this.state.selected.id);
    this.setState((state) => ({
      notes : [...state.notes.slice(0, noteIndex), ...state.notes.slice(noteIndex + 1)],
      selected : state.notes.length > 0 ? state.notes[noteIndex - 1] : {}
    }), this._commit );
  }

  updateSelected(e){

    this.setState({
      selected : {
        id : this.state.selected.id,
        text : e.target.value,
        date : this.state.selected.date
      }
    });

  }

  selectNote(id) {

    this.editNote();

    if(id !== this.state.selected.id){
      this.setState({
        selected : this._getNote(id)
      });
    }

  }

  render(){
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Sidebar  notes={this.state.notes} 
                    addNote={this.addNote}
                    deleteSelectedNote={this.deleteSelectedNote}
                    selectedID={this.state.selected.id}
                    selectNote={this.selectNote}/>
          <Main     note={this.state.selected}
                    deleteSelectedNote={this.deleteSelectedNote}
                    updateSelected={this.updateSelected}/>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
