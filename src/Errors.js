import React from 'react';

class Errors extends React.Component {
  render(){
    return(
      <>
      
      <h2>{this.props.errorCode}</h2></>
    )
  }
}

export default Errors;