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
  if (props.ingredients.length == 0 || props.ingredients === undefined) {
    return <div></div>;
  };

  let sum = itemKey => {
    var value = 0;
    props.ingredients.forEach(function (item) {
      value = item[itemKey] + value;
    });
     return value;
  };

  return (
    <div id="ingredient-summary-container" className="center container">
      <div className="row">
        <div className="col-3">
          <div>Weight</div>
        </div>
        <div className="col-3">
          <div>Kcal</div>
        </div>
        <div className="col-2">
          <div>Carbs</div>
        </div>
        <div className="col-2">
          <div>Protein</div>
        </div>
        <div className="col-2">
          <div>Fat</div>
        </div>
      </div>
      <div className="row">
        <div className="center">
          <div className="col-3">
            <div>{sum('weight')}</div>
          </div>
          <div className="col-3">
            <div>{sum('kcal')}</div>
          </div>
          <div className="col-2">
            <div>{sum('carbs')}</div>
          </div>
          <div className="col-2">
            <div>{sum('protein')}</div>
          </div>
          <div className="col-2">
            <div>{sum('fat')}</div>
          </div>
        </div>
      </div>
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
