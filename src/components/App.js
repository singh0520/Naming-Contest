import Header from './Header';
import React from 'react';
import contestList from './contestList';


class App extends React.Component{
  state = {
    pageHeader: 'Naming Contest!',
    contests: this.props.initialContests
  };

  componentDidMount(){  

  }

  render(){
    //debugger;
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <contestList contests = {this.state.contests}/>
      </div>
    );
  }

}

 export default App;
