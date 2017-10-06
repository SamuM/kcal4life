import React, {Component} from 'react';

export default class IngredientInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.props.handleIngredientChange(e.target.value);
  }

  render() {
    const name = this.props.ingredient;

    return (
      <div>
        <input  name="ingredientName"
                placeholder="Ingredient name"
                onChange={this.handleChange}
                value={name} />
      </div>
    );
  }
}
