import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search';

export default class PlantList extends Component {
  state = {
    plants: []
  };


// class PlantList extends React.Component{
//   constructor(props) {
//     super(props);

//     this.state = {
//       plants: []
//     }
//   }


  componentDidMount() {
  
      axios
        .get('http://localhost:3333/plants')
        .then(res => this.setState({ plants: res.data.plantsData}) || console.log("api results", res.data.plantsData))
        .catch(err => console.log("Error: ", err))
  
  };


  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/

  render() {
    return (
      <main className="plant-list">
        <Search plants={this.state.plants} />
        {this.state?.plants?.map((plant) => (
          <div className="plant-card" key={plant.id}>
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p>☀️ {plant.light}</p>
                <p>💦 {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}

// export default PlantList;