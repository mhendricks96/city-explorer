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
   }
 }



 fetchData = () => {
   console.log('fetching')
 }

  handleSearch = async(citySubmitted) => {
    this.setState({
      haveSearched: true,
      citySubmitted: citySubmitted,
    })
    console.log(citySubmitted);
    // API REQUEST
    this.fetchData();
    const accesskey = 'pk.b47b970ef1ded58b7ddf2f383947df7e';
    let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${accesskey}&q=${citySubmitted}&format=json`);
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
        {this.state.haveSearched ? <button onClick={this.searchAgain}>Explore Another City!</button> : <CitySearch handleSearch = {this.handleSearch}/>}
        </header>
      </div>
    );
  }
}

export default App;
