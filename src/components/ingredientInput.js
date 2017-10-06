import React, {Component} from 'react';

export default class IngredientInput extends Component {
  constructor(props) {
    super(props);
    this.state = {  name: '',
                    weight: 0,
                    kcal: 0,
                    carbs: 0,
                    protein: 0,
                    fat: 0  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    this.props.handleIngredientChange(this.state);
    e.preventDefault();
    this.setState({ name: '',
                    weight: 0,
                    kcal: 0,
                    carbs: 0,
                    protein: 0,
                    fat: 0  });
  }

  render() {
    const name    = this.state.name;
    const weight  = this.state.weight;
    const kcal    = this.state.kcal;
    const carbs   = this.state.carbs;
    const protein = this.state.protein;
    const fat     = this.state.fat;


    return (
      <form id="ingredient-input" onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input  name="name"
                type="text"
                placeholder="Ingredient name"
                onChange={this.handleChange}
                value={name} />
        </label>
        <label>
          Weight:
          <input  name="weight"
                  type="number"
                  onChange={this.handleChange}
                  value={weight} />
        </label>
        <label>
          Calories:
          <input  name="kcal"
                  type="number"
                  onChange={this.handleChange}
                  value={kcal} />
        </label>
        <label>
          Carbs:
          <input  name="carbs"
                  type="number"
                  onChange={this.handleChange}
                  value={carbs} />
        </label>
        <label>
          Protein:
          <input  name="protein"
                  type="number"
                  onChange={this.handleChange}
                  value={protein} />
        </label>
        <label>
          Fat:
          <input  name="fat"
                  type="number"
                  onChange={this.handleChange}
                  value={fat} />
        </label>
        <input type="submit" value="Add" />
      </form>
    );
  }
}
