import React, {Component} from 'react';

function IngredientItem(props) {
  return  <li>  {props.value.name}
                Weight: {props.value.weight}
                Calories: {props.value.kcal}
                Carbs: {props.value.carbs}
                Protein: {props.value.protein}
                Fat: {props.value.fat}
          </li>;
}

function IngredientsElement(props) {
  const ingredients = props.ingredients;
  const ingredientsList = ingredients.map((ingredient, index) =>
    <IngredientItem key={ingredient.name.toString() + index.toString()} value={ingredient}></IngredientItem>
  );

  return (
    <ul>
    {ingredientsList}
    </ul>
  );
}

function IngredientsSummary(props) {
  let sum = key => {
    console.log(props)
     return 100;
  };
  return (
    <div id="ingredient-summary-container">
      <p>{weight('weight')}</p>
    </div>
  );
}

export default class IngredientList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ingredients = this.props.ingredients;

    return (
      <div>
        <IngredientsElement ingredients={ingredients} />
        <IngredientsSummary ingredients={ingredients} />
      </div>
    );
  }
}
