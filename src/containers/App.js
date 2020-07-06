import React from 'react';
import styled, { ThemeProvider } from 'styled-components' ;
import dayjs from 'dayjs' ;

import Themes from '../styles/Themes.js' ;
import GlobalStyle from '../styles/Global.js' ;

import Sidebar from './Sidebar.js';
import Main from './Main.js';
import WelcomeNote from '../WelcomeNote.js' ;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notes : localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [ WelcomeNote ],
      selected : {},
      theme : 'light'
    };

    this.selectNote = this.selectNote.bind(this);
    this.addNote = this.addNote.bind(this);
    this.deleteSelectedNote = this.deleteSelectedNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.updateSelected = this.updateSelected.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  // Lifecycle Hooks
  componentDidMount(){
    this.setState({
      selected : this.state.notes.length > 0 ? this.state.notes[this.state.notes.length - 1] : null 
    });

    //window.addEventListener('beforeunload', this.editNote );

    this.autoSave = setInterval(
      () => this.editNote(),
      10000
    );

  }

  componentWillUnmount(){
    window.removeEventListener('beforeunload', this.editNote );
  }

  // Helper functions
  //
  _getNote(id){
    return this.state.notes.find( note => note.id === id);
  }

  _getNoteIndex(id){
    return this.state.notes.findIndex(note => note.id === id);
  }

  _commit(){
    localStorage.setItem('notes', JSON.stringify(this.state.notes));
  }

  // Editing functions
  //
  editNote(){
    if (this.state.selected) {
      const noteIndex = this._getNoteIndex(this.state.selected.id);
      const note = this.state.selected;
      this.setState((state) => ({
        notes : [...state.notes.slice(0, noteIndex), note, ...state.notes.slice(noteIndex + 1)]
      }), this._commit );
    }
  }

  addNote(){
    if(this.state.notes.length > 0) {
      this.editNote()
    }

    const number = this.state.notes.filter( item => item.text.match(/^(# Untitled)/g)).length + 1;

    const note = {
      id : this.state.notes.length > 0 ? this.state.notes[this.state.notes.length - 1].id + 1 : 1,
      text : `# Untitled ${number}`, 
      date : dayjs().format('DD/MM/YYYY')
    }
    this.setState((state) => ({
      notes : [...state.notes, note ], 
      selected: note 
    }), this._commit );
  }

  deleteSelectedNote(){
    const selectedNoteIndex = this._getNoteIndex(this.state.selected.id);
    const nextprevIndex = selectedNoteIndex > 0 ? selectedNoteIndex - 1 : selectedNoteIndex + 1 ;
    console.log(selectedNoteIndex);
    this.setState((state) => ({
      notes : [...state.notes.slice(0, selectedNoteIndex), ...state.notes.slice(selectedNoteIndex + 1)],
      selected : state.notes.length === 1 ? null : state.notes[nextprevIndex]
    }), this._commit );
  }

  deleteNote(id) {
    const noteIndex = this._getNoteIndex(id);
    console.log(noteIndex);
    this.setState((state) => ({
      notes : [...state.notes.slice(0, noteIndex), ...state.notes.slice(noteIndex + 1)]
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

  toggleTheme(){
    this.setState((state) => ({
      theme : this.state.theme === 'dark' ? 'light' : 'dark'
    }))
  }

  render(){
    return (
      <ThemeProvider theme={this.state.theme === 'dark' ? Themes.dark : Themes.light}>
        <GlobalStyle />
        <Wrapper>
            <Sidebar  notes={this.state.notes} 
                      addNote={this.addNote}
                      deleteSelectedNote={this.deleteSelectedNote}
                      selected={this.state.selected} 
                      deleteNote={this.deleteNote}
                      selectNote={this.selectNote}/>
            <Main     note={this.state.selected}
                      deleteSelectedNote={this.deleteSelectedNote}
                      toggleTheme={this.toggleTheme}
                      updateSelected={this.updateSelected}/>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
