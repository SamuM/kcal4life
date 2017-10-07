import React, {Component} from 'react';
import '../styles/header.css';

export default class IngredientInput extends Component {

  render() {
    return (
        <div id="app-header">
            <h1>kcal<span className="header-highlight-color">4</span>life</h1>
        </div>
    );
  }
}
