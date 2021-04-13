import React from 'react';
//import { ListGroup } from 'react-bootstrap';


class Weather extends React.Component {
  

  
  render(){

    //let renderingWeather = this.props.cityWeather.map((day, index) => (
      //<ListGroup.Item key={index}>{`${day.date}: ${day.description}`}</ListGroup.Item>
  //))


    console.log('in weatherjs', this.props.cityWeather)
    return(
      //<ListGroup>
        //{renderingWeather}
      //</ListGroup>
      <div>
      <p>Date: {this.props.cityWeather[0].date}</p>
      <p>Todays Weather: {this.props.cityWeather[0].description}</p>
      <p>High: {this.props.cityWeather[0].highTemp}</p>
      <p>Low: {this.props.cityWeather[0].lowTemp}</p>
      
      </div>
    )
  }
}

export default Weather;