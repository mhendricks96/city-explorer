import React from 'react';

class Errors extends React.Component {
  render(){
    return(
      <h1>{this.props.errorCode}</h1>
    )
  }
}

export default Errors;