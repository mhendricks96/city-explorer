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

  handleSearch = (citySubmitted) => {
    this.setState({
      haveSearched: true,
      citySubmitted: citySubmitted,
    })
    console.log(citySubmitted);
    this.fetchData();
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
