import React from 'react';
import axios from 'axios';
import CitySearch from './CitySearch.js';
import CityMap from './CityMap.js';
//import Errors from './Errors.js';
import './App.css';
import Weather from './Weather.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      haveSearched: false,
      citySubmitted: '',
      latOfCitySubmitted: '',
      lonOfCitySubmitted: '',
      errorCode: '',
      chosenCityWeather: '',
    }
  }





  fetchData = () => {
    console.log('fetching')
  }


  //handleWeather = async () => {
    //try {
    //  let allDaysWeather = await axios.get('http://localhost:3002/weather');

      //this.setState({
        //chosenCityWeather: chosenCityWeather,
      //})
    //} catch (err) {
      //this.setState({
        //error: err.message,
      //});
    //}
    //console.log(firstDate);
    //console.log(allDaysWeather);
  //}

    handleSearch = async (citySubmitted) => {
      // API REQUEST
      this.fetchData();
      try {

        let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${citySubmitted}&format=json`);
        let lat = cityData.data[0].lat;
        let lon = cityData.data[0].lon;
        let displayName = cityData.data[0].display_name;
        let errorCode = cityData.status;

        let chosenCityWeather = await axios.get('http://localhost:3002/weather');
        //console.log(chosenCityWeather);
        let firstDay = chosenCityWeather.data.data[0];
        let firstDayDate = chosenCityWeather.data.data[0].datetime;
        let firstDayDescription = chosenCityWeather.data.data[0].weather.description;
        let firstDayHi = chosenCityWeather.data.data[0].max_temp;
        let firstDayLow = chosenCityWeather.data.data[0].min_temp;
        //console.log(firstDay);
        
        this.setState({
          haveSearched: true,
          citySubmitted: displayName,
          latOfCitySubmitted: lat,
          lonOfCitySubmitted: lon,
          errorCode: errorCode,
          //chosenCityWeather: chosenCityWeather,
          firstDayDescription: firstDayDescription,
          firstDayDate: firstDayDate,
          firstDayHi: firstDayHi,
          firstDayLow: firstDayLow,
        })
        //console.log(citySubmitted);
        //console.log(chosenCityWeather);
        console.log(firstDay);
        console.log(firstDayDate);


        //console.log(displayName);
        //console.log(cityData);
      } catch (err) {
        this.setState({
          error: err.message,
        });
      }
    }

    //getWeather = async () => {
      
      //  let chosenCityWeather = await axios.get('http://localhost:3002/weather');
        //console.log(chosenCityWeather);
        //let lat = chosenCityWeather.lat;
        //let lon = chosenCityWeather.lon;
        //console.log(lat);
        //console.log(lon);
        //this.setState({
          //chosenCityWeather: chosenCityWeather,
        //})
    //}


    searchAgain = () => {
      this.setState({
        haveSearched: false,
      })
    };

    render() {
      return (
        <div className="App">
          <header className="App-header">

            <h1>Welcome to City Explorer!</h1>
            {this.state.haveSearched ?
              <div>
                <h2>{this.state.citySubmitted}</h2>
                <p>latitude: {this.state.latOfCitySubmitted}</p>
                <p>longitude: {this.state.lonOfCitySubmitted}</p>

                <Weather chosenCityWeather={this.state.chosenCityWeather} firstDayDate={this.state.firstDayDate} firstDayDescription={this.state.firstDayDescription} firstDayLow={this.state.firstDayLow} firstDayHi={this.state.firstDayHi} />

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
