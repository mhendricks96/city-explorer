import React from 'react';
//import { ListGroup } from 'react-bootstrap';


class Movies extends React.Component {
  

  
  render(){
    console.log(this.props.movies)
    return(
     //<div>movies</div>
      <div>
      <p>Best movie (somewhat) about this place: <em>{this.props.movies.data[0].title}</em></p>
      <p>What it's about: <em>{this.props.movies.data[0].description}</em></p>
    
      
      </div>
    )
  }
}

export default Movies;