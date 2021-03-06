import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CitySearch extends React.Component {
  
  constructor(props) {
    super(props);

    this.textInput = React.createRef();

  }
  
  handleFormSubmission = (event) => {
    event.preventDefault();
    
    this.props.handleSearch(this.textInput.current.value);
    //this.props.getWeather();
    //console.log(this.textInput.current.value)
    
  }

  //getWeatherBit = (event) => {
    //event.preventDefault();

  //}

  
  render() {
    return (
      <Form onSubmit= {this.handleFormSubmission}>
        <Form.Control size="lg" type="text" placeholder="Enter City" ref={this.textInput}/>
        <br />
        <Button variant="primary" type="submit">
          Explore!
          </Button>
      </Form>
    )
  }
}


export default CitySearch;