import React from 'react';
import ReactMarkdown from 'react-markdown';
import TextareaAutosize from 'react-textarea-autosize';

import MainHeader from '../components/main/MainHeader.js';

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
      <main className='main'>
        <MainHeader toggleMode={this.toggleMode}
                    deleteSelectedNote={this.props.deleteSelectedNote}
                    mode={this.state.mode}/>
        <div className={this.state.mode}> 
          {this.state.mode ==='preview' 
            ? <ReactMarkdown source={this.props.note.text} />
            : <TextareaAutosize value={this.props.note.text} onChange={this.props.updateSelected} />
          }
        </div>

      </main>
    );
  }

}

export default Main;
