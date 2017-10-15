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
    this.handleFocus = this.handleFocus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    var value = e.target.value;

    // Don't allow negative values.
    if (value < 0) {
      this.setState({[e.target.name]: 0});
      return;
    }
    // Inputs return string by default so we need to convert them to floats
    if (e.target.type === 'number') {
      value = parseFloat(value);
    }

    this.setState({[e.target.name]: value});
  }

  handleFocus(e) {
    if (e.target.value == 0) {
      e.target.value = null;
    }
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
      <form id="ingredient-input" className="center" onSubmit={this.handleSubmit}>
        <div className="input-wrapper">
          <input  name="name"
                  type="text"
                  placeholder="Ingredient name"
                  onChange={this.handleChange}
                  value={name} />
          <label>Name</label>
        </div>
        <div className="input-wrapper">
          <input  name="weight"
                  type="number"
                  onFocus={this.handleFocus}
                  onChange={this.handleChange}
                  value={weight} />
          <label>Weight (<span className="highlight-orange">g</span>)</label>
        </div>
        <div className="input-wrapper">
          <input  name="kcal"
                  type="number"
                  onFocus={this.handleFocus}
                  onChange={this.handleChange}
                  value={kcal} />
          <label>Calories <span className="highlight-orange">/</span> 100g</label>
        </div>
        <div className="input-wrapper">
          <input  name="carbs"
                  type="number"
                  onFocus={this.handleFocus}
                  onChange={this.handleChange}
                  value={carbs} />
          <label>Carbs <span className="highlight-orange">/</span> 100g</label>
        </div>
        <div className="input-wrapper">
          <input  name="protein"
                  type="number"
                  onFocus={this.handleFocus}
                  onChange={this.handleChange}
                  value={protein} />
          <label>Protein <span className="highlight-orange">/</span> 100g</label>
        </div>
        <div className="input-wrapper">
          <input  name="fat"
                  type="number"
                  onFocus={this.handleFocus}
                  onChange={this.handleChange}
                  value={fat} />
          <label>Fat <span className="highlight-orange">/</span> 100g</label>
        </div>
        <div className="input-wrapper">
          <input type="submit" value="Add" />
        </div>
      </form>
    );
  }
}
