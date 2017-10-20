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
        <InputContent name="Name"
                      type="text"
                      focus={this.handleFocus}
                      change={this.handleChange}
                      value={name}
                      placeholder="Ingredient name"/>
        <InputContent name="Weight"
                      type="number"
                      focus={this.handleFocus}
                      change={this.handleChange}
                      value={weight}
                      unit="g"/>
        <InputContent name="Kcal"
                      type="number"
                      focus={this.handleFocus}
                      change={this.handleChange}
                      value={kcal}
                      unit="100g"/>
        <InputContent name="Carbs"
                      type="number"
                      focus={this.handleFocus}
                      change={this.handleChange}
                      value={carbs}
                      unit="100g"/>
        <InputContent name="Protein"
                      type="number"
                      focus={this.handleFocus}
                      change={this.handleChange}
                      value={protein}
                      unit="100g"/>
        <InputContent name="Fat" type="number"
                      focus={this.handleFocus}
                      change={this.handleChange}
                      value={fat}
                      unit="100g"/>
        <div className="input-wrapper">
          <input type="submit" value="Add" />
        </div>
      </form>
    );
  }
}

function InputContent(props) {
  const name = props.name;
  const nameLowerCase = props.name.toLowerCase();
  const type = props.type;
  const focus = props.focus;
  const change = props.change;
  const value = props.value;
  const unit = props.unit;
  const placeholder = props.placeholder;
  return (
    <div className="input-wrapper">
      <input  name={nameLowerCase}
              type={type}
              onFocus={focus}
              onChange={change}
              value={value}
              placeholder={placeholder}/>
      <label>{name}
        { unit != null &&
          <span>
            <span className="highlight-orange"> / </span><span>{unit}</span>
          </span>
        }
      </label>
    </div>
  );
}
