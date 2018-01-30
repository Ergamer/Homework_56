import React, { Component } from 'react';
import './App.css';
import Foods from "./components/Foods/Foods"
import Orders from "./components/Orders/Orders"
import Butt from "./components/Butt/Butt"

let prices = [5, 30, 20, 50];

class App extends Component {
    state = {
        ingredients: [
            {type: "Salad", amount: 0, id: 1},
            {type: "Bacon", amount: 0, id: 2},
            {type: "Cheese", amount: 0, id: 3},
            {type: "Meat", amount: 0, id: 4},
        ],
        total: 20,
    };
  addFoods = () => {
      const addFood = [];
      for (let i = 0; i < 4; i++) {
        let oneFood = {
            hasItem: false
        };
        addFood.push(oneFood)
      }
      addFood[Math.floor(Math.random() * 4)].hasItem = true;
      return addFood;
  };

  addIngredients = (index) => {
    let addPrice = this.state.total;
    const addIngredient = [...this.state.ingredients];
    const addSomeIngredients = {...this.state.ingredients[index]};
    addPrice += prices[index];
      addSomeIngredients.amount ++;
      addIngredient[index] = addSomeIngredients;
    this.setState({ingredients: addIngredient, total: addPrice})
  };
  takeOffIngredients = (index) => {
      let takePrice = this.state.total;
      const takeIngredient = [...this.state.ingredients];
      const takeSomeIngredients = {...this.state.ingredients[index]};
      takePrice -= prices[index];
      takeSomeIngredients.amount --;
      takeIngredient[index] = takeSomeIngredients;
      this.setState({ingredients: takeIngredient, total: takePrice})
    };
  render() {
    return (
      <div className="App">
        <Foods fillings={this.state.ingredients}/>
          <div className="Current">Current price: {this.state.total}</div>
          {this.state.ingredients.map((ingredient, index) => {
            return <Orders name={ingredient.type} addFoods={this.state.ingredients} less={() => this.takeOffIngredients(index)}
                           more ={() => this.addIngredients(index)}/>
      })}
      </div>
    );
  }
}

export default App;
