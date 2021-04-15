import React from 'react';
import axios from 'axios';
import CitySearch from './CitySearch.js';
import CityMap from './CityMap.js';
//import Errors from './Errors.js';
import './App.css';
import Weather from './Weather.js';
import Movies from './Movies.js;'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      haveSearched: false,
      displayResults: false,
      citySubmitted: '',
      latOfCitySubmitted: '',
      lonOfCitySubmitted: '',
      errorCode: '',
      //cityWeather: {},
      //movieObjects: []

    }
  }





  fetchData = () => {
    console.log('fetching')
  }



  getWeather = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather`,
      {
        params: {
          lat: this.state.latOfCitySubmitted,
          lon: this.state.lonOfCitySubmitted,
        }
      })
      .then(weather => {
        console.log(weather)
        this.setState({
          weather: weather,
          displayResults: true,
        })
      })
      .catch(err => {
        console.error(err)
      })
  }
  //console.log(this.state);



  getMovies = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/movies`,
      {
        params: {
          citySubmitted: this.state.citySubmitted,

        }
      })
      .then(movies => {
        console.log(movies)
        this.setState({
          movies: movies,
          //displayResults: true,
        })
      })
      .catch(err => {
        console.error(err)
      })
  }


  handleSearch = async (citySubmitted) => {
    // API REQUEST
    this.fetchData();
    try {

      let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${citySubmitted}&format=json`);
      console.log(citySubmitted)
      let lat = cityData.data[0].lat;
      let lon = cityData.data[0].lon;
      let displayName = cityData.data[0].display_name;
      let errorCode = cityData.status;


      this.setState({
        haveSearched: true,
        citySubmitted: citySubmitted,
        latOfCitySubmitted: lat,
        lonOfCitySubmitted: lon,
        errorCode: errorCode,
        displayName: displayName,
        //cityWeather: this.weather,

      })
      this.getMovies();
      this.getWeather();

    } catch (error) {
      this.setState({
        error: error.message,
      });
    }
  }




  searchAgain = () => {
    this.setState({
      haveSearched: false,
      displayResults: false,
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1>Welcome to City Explorer!</h1>
          {this.state.displayResults &&
            <div>
            <Weather weather={this.state.weather} />
            <Movies movies={this.state.movies} />
            </div>}

          {this.state.haveSearched ?
            <div>
              <h2>{this.state.displayName}</h2>
              <p>latitude: {this.state.latOfCitySubmitted}</p>
              <p>longitude: {this.state.lonOfCitySubmitted}</p>


              <CityMap searchAgain={this.searchAgain} cityDataLat={this.state.latOfCitySubmitted} cityDatalon={this.state.lonOfCitySubmitted} />

            </div> :
            <CitySearch handleSearch={this.handleSearch} />
          }
          <section>
            {this.state.error ? <h3>{this.state.error}</h3> : ''
            }
          </section>

        </header>
      </div>
    );
  }
}

export default App;
