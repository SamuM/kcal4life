import React, {Component} from 'react';

function IngredientItem(props) {
  return  (
          <tr>
            <td>{props.value.name}</td>
            <td>{props.value.weight}</td>
            <td>{props.value.kcal}</td>
            <td>{props.value.carbs}</td>
            <td>{props.value.protein}</td>
            <td>{props.value.fat}</td>
          </tr>
          );
}

function IngredientsElement(props) {
  const ingredients = props.ingredients;
  const ingredientsList = ingredients.map((ingredient, index) =>
    <IngredientItem key={ingredient.name.toString() + index.toString()} value={ingredient}></IngredientItem>
  );

  return (
    <tbody>
      {ingredientsList}
      <IngredientsSummary ingredients={props.ingredients} />
    </tbody>
  );
}

function IngredientsSummary(props) {
  if (props.ingredients.length == 0 || props.ingredients === undefined) {
    return <tr></tr>;
  };

  let sum = itemKey => {
    var value = 0;
    props.ingredients.forEach(function (item) {
      value = item[itemKey] + value;
    });
     return value;
  };

  return (
    <tr>
      <td>Total</td>
      <td>{sum('weight')}</td>
      <td>{sum('kcal')}</td>
      <td>{sum('carbs')}</td>
      <td>{sum('protein')}</td>
      <td>{sum('fat')}</td>
    </tr>
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
      <table className="table-container">
        <thead>
      		<tr>
      			<th><h1>Name</h1></th>
      			<th><h1>Weight</h1></th>
      			<th><h1>Calories</h1></th>
      			<th><h1>Carbs</h1></th>
            <th><h1>Protein</h1></th>
            <th><h1>Fat</h1></th>
      		</tr>
  	    </thead>
          <IngredientsElement ingredients={ingredients} />

      </table>
      </div>
    );
  }
}
