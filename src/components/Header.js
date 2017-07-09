import React from 'react';

const Header = React.createClass({
  render(){
    return(
    <h2 className="text-center">
      {this.props.message}
    </h2>);
  }
});

export default Header;
