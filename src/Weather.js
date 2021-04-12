import React from 'react';


class Weather extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {};  
    
  }
  
  render(){
    return(
      <div>
        <p>Today's date: {this.props.firstDayDate}</p>
        <p>Overall Weather Today: {this.props.firstDayDescription}</p>
        <p>Today's High Temp: {this.props.firstDayHi}</p>
        <p>Today's Low Temp: {this.props.firstDayLow}</p>
      </div>
    )
  }
}

export default Weather;