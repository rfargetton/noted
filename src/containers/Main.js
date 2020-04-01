import React from 'react';
import styled from 'styled-components' ;

import MainHeader from '../components/main/MainHeader.js';
import Editor from '../components/main/Editor.js';
import Previewer from '../components/main/Previewer.js' ;
import Empty from '../components/main/Empty.js' ;

const Wrapper = styled.div`
  width: 100%;
  overflow: scroll;
`

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mode : 'preview'
    }
    this.toggleMode = this.toggleMode.bind(this);
  }

  toggleMode(){
    this.setState({
      mode : this.state.mode === 'preview' ? 'edit' : 'preview',
    });
  }

  render(){
    const fillerMessage = 'Create a note to get started !';
    return (
      <Wrapper>
        <MainHeader toggleMode={this.toggleMode}
                    toggleTheme={this.props.toggleTheme}
                    deleteSelectedNote={this.props.deleteSelectedNote}
                    mode={this.state.mode}/>
        {!this.props.note 
          ? <Empty />
          : (this.state.mode ==='preview' 
            ? <Previewer text={this.props.note.text} />
            : <Editor text={this.props.note ? this.props.note.text : fillerMessage} handleChange={this.props.updateSelected} />
          )
        }

      </Wrapper>
    );
  }

}

export default Main;
