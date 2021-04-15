import React from 'react';
//import { ListGroup } from 'react-bootstrap';


class Movies extends React.Component {
  

  
  render(){

    return(
     
      <div>
      <p>movie: {this.props.movie.data[0].title}</p>
      <p>Todays Weather: {this.props.movie.data[0].description}</p>
      
      
      </div>
    )
  }
}

export default Movies;