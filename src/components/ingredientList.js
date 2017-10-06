import React, {Component} from 'react';

function IngredientItem(props) {
  return <li>{props.value}</li>;
}

function IngredientsElement(props) {
  const ingredients = props.ingredients;
  const ingredientsList = ingredients.map((name, index) =>
    <IngredientItem key={name.toString() + index.toString()} value={name}></IngredientItem>
  );

  return (
    <ul>
    {ingredientsList}
    </ul>
  );
}

export default class IngredientList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ingredients = this.props.ingredients;

    return (
      <IngredientsElement ingredients={ingredients}></IngredientsElement>
    );
  }
}
