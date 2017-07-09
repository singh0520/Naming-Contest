import Header from './Header';
import React from 'react';

class App extends React.Component{
  state = { pageHeader: 'Naming Contest!'};
  render(){
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          ...
        </div>
      </div>
    );
  }

}

export default App;
