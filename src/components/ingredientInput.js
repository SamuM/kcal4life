import React, {Component} from 'react';

export default class IngredientInput extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({name: e.target.value});
  }

  handleSubmit(e) {
    this.props.handleIngredientChange(this.state.name);
    e.preventDefault();
    this.setState({name: ''});
  }

  render() {
    const name = this.state.name;

    return (
      <form onSubmit={this.handleSubmit}>
        <input  name="ingredientName"
                placeholder="Ingredient name"
                onChange={this.handleChange}
                value={name} />
        <input type="submit" value="Add" />
      </form>
    );
  }
}
