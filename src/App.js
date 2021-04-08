import React from 'react';
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


  handleSearch = (citySubmitted) => {
    this.setState({
      haveSearched: true,
      citySubmitted: citySubmitted,
    })
    console.log(citySubmitted);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

        <h1>
            Welcome to City Explorer!
        </h1>
        <CitySearch handleSearch = {this.handleSearch}/>
        </header>
      </div>
    );
  }
}

export default App;
