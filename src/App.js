import React from 'react';
import axios from 'axios';
import CitySearch from './CitySearch.js'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      haveSearched: false,
      citySubmitted: '',
      latOfCitySubmitted:'',
      lonOfCitySubmitted:'',
    }
  }



  fetchData = () => {
    console.log('fetching')
  }

  handleSearch = async (citySubmitted) => {
    // API REQUEST
    this.fetchData();
    //const accesskey = 'pk.b47b970ef1ded58b7ddf2f383947df7e';
    let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${citySubmitted}&format=json`);
    let lat = cityData.data[0].lat;
    let lon = cityData.data[0].lon;
    let displayName = cityData.data[0].display_name;
    this.setState({
      haveSearched: true,
      citySubmitted: displayName,
      latOfCitySubmitted: lat,
      lonOfCitySubmitted: lon,
    })
    console.log(citySubmitted);

    //console.log(displayName);
    //console.log(cityData);
  }

  searchAgain = () => {
    this.setState({
      haveSearched: false,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1>Welcome to City Explorer!</h1>
          {this.state.haveSearched ?
            <div>
              <h2>{this.state.citySubmitted}</h2>
              <p>latitude: {this.state.latOfCitySubmitted}</p>
              <p>longitude {this.state.lonOfCitySubmitted}</p>
              <button onClick={this.searchAgain}>Explore Another City!</button>
            </div> :
            <CitySearch handleSearch={this.handleSearch} />}
        </header>
      </div>
    );
  }
}

export default App;
