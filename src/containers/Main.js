import React from 'react';
import styled from 'styled-components' ;

import MainHeader from '../components/main/MainHeader.js';
import Editor from '../components/main/Editor.js';
import Previewer from '../components/main/Previewer.js' ;

const Wrapper = styled.div`
  width: 100%;
`

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mode : 'edit'
    }
    this.toggleMode = this.toggleMode.bind(this);
  }

  toggleMode(){
    this.setState({
      mode : this.state.mode === 'preview' ? 'edit' : 'preview',
    });
  }

  render(){
    return (
      <Wrapper>
        <MainHeader toggleMode={this.toggleMode}
                    deleteSelectedNote={this.props.deleteSelectedNote}
                    mode={this.state.mode}/>
        {this.state.mode ==='preview' 
          ? <Previewer text={this.props.note.text} />
          : <Editor text={this.props.note.text} handleChange={this.props.updateSelected} />
        }

      </Wrapper>
    );
  }

}

export default Main;
