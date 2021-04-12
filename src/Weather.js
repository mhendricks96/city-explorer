import React from 'react';


class Weather extends React.Component {
  render(){
    return(
      <div>
        <p>hi{this.props.firstDay}</p>
      </div>
    )
  }
}

export default Weather;