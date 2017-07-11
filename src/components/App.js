import Header from './Header';
import React from 'react';
import contestPreview from './contestPreview';

class App extends React.Component{
  state = { pageHeader: 'Naming Contest!'};
  render(){
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          <contestPreview {...this.props.contests[0]} />
        </div>
      </div>
    );
  }

}

export default App;
