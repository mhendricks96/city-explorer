import React from 'react';

class CityMap extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.searchAgain}>Explore Another City!</button>
        <br></br>
        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.cityDataLat},${this.props.cityDatalon}&zoom=14`} alt="map of selected city" />


      </div>
    )
  }
}

export default CityMap;