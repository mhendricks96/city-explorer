import React from 'react';
import axios from 'axios';
import CitySearch from './CitySearch.js'
import Errors from './Errors.js'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      haveSearched: false,
      citySubmitted: '',
      latOfCitySubmitted:'',
      lonOfCitySubmitted:'',
      errorCode: '',

    }
  }



  fetchData = () => {
    console.log('fetching')
  }

  handleSearch = async (citySubmitted) => {
    // API REQUEST
    this.fetchData();
    let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${citySubmitted}&format=json`);
    let lat = cityData.data[0].lat;
    let lon = cityData.data[0].lon;
    let displayName = cityData.data[0].display_name;
    let errorCode = cityData.status;
    this.setState({
      haveSearched: true,
      citySubmitted: displayName,
      latOfCitySubmitted: lat,
      lonOfCitySubmitted: lon,
      errorCode: errorCode,
    })
    console.log(citySubmitted);

    //console.log(displayName);
    console.log(cityData);
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
              <p>longitude: {this.state.lonOfCitySubmitted}</p>
              <button onClick={this.searchAgain}>Explore Another City!</button>
            </div> :
            <CitySearch handleSearch={this.handleSearch} />}
          <section>
            {this.state.errorCode === 200 ? '' : 
              <div>
              
             <Errors errorCode={this.state.errorCode}/>
             </div>
            }
          </section>
        
        </header>
      </div>
    );
  }
}

export default App;
