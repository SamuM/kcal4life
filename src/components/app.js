import React, {Component} from 'react';
import '../styles/app.css';

import Header from './header';
import IngredientInput from './ingredientInput';
//import IngredientList from './ingredientList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {ingredient: ''};
    this.handleIngredientChange = this.handleIngredientChange.bind(this);
  }

  handleIngredientChange(ingredient) {
    console.log('ingredient change');
    this.setState({ingredient});
  }
  render() {
    const ingredient = this.state.ingredient;
    return (
      <div>
        <Header></Header>
        <IngredientInput  Ingredient={ingredient}
                          handleIngredientChange={this.handleIngredientChange}></IngredientInput>
        <p>{this.state.ingredient}</p>
      </div>
    );
  }
}
