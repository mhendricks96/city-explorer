import React from 'react';
import './Restaurants.css';

class Restaurants extends React.Component {
  render(){
    console.log(this.props.yelp)
    return(
      <div>
      <h3>Top 3 restaurants in town!</h3>
      <ul>
        <li><b>{this.props.yelp.data[0].name}</b> * {this.props.yelp.data[0].type} * rating:{this.props.yelp.data[0].rating}</li>
        <li><b>{this.props.yelp.data[1].name}</b> * {this.props.yelp.data[1].type} * rating:{this.props.yelp.data[1].rating}</li>
        <li><b>{this.props.yelp.data[2].name}</b> * {this.props.yelp.data[2].type} * rating:{this.props.yelp.data[2].rating}</li>
      </ul>
      </div>
    )
  }
}

export default Restaurants;