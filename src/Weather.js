import React from 'react';
//import { ListGroup } from 'react-bootstrap';


class Weather extends React.Component {
  

  
  render(){

    //let renderingWeather = this.props.cityWeather.map((day, index) => (
      //<ListGroup.Item key={index}>{`${day.date}: ${day.description}`}</ListGroup.Item>
  //))


    console.log('in weatherjs', this.props.weather)
    
    return(
      //<ListGroup>
        //{renderingWeather}
      //</ListGroup>
      <div>
      <p>Todays date: {this.props.weather.data[0].date}</p>
      <p>Todays Weather: {this.props.weather.data[0].description}</p>
      
      
      </div>
    )
  }
}

export default Weather;