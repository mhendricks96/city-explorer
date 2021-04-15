import React from 'react';
//import { ListGroup } from 'react-bootstrap';


class Weather extends React.Component {
  

  
  render(){

    return(
     
      <div>
      <p>Todays date: {this.props.weather.data[0].date}</p>
      <p>Todays Weather: {this.props.weather.data[0].description}</p>
      
      
      </div>
    )
  }
}

export default Weather;