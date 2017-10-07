import React, {Component} from 'react';
import '../styles/app.css';
import '../styles/simple-grid.css';

import Header from './header';
import IngredientInput from './ingredientInput';
import IngredientList from './ingredientList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {ingredients: []};
    this.handleIngredientChange = this.handleIngredientChange.bind(this);
  }

  handleIngredientChange(ingredient) {
    const ingredientsArray = this.state.ingredients;
    ingredientsArray.push(ingredient);
    this.setState({ingredients: ingredientsArray});
  }
  render() {
    const ingredients = this.state.ingredients;
    return (
      <div>
        <Header></Header>
        <div id="calculator" className="center">
          <IngredientInput handleIngredientChange={this.handleIngredientChange}>
          </IngredientInput>
          <IngredientList ingredients={ingredients}></IngredientList>
        </div>
      </div>
    );
  }
}
