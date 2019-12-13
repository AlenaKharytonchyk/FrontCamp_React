import React from 'react';
import './search.scss';

class SearchBy extends React.Component {
  constructor(props) {
    super(props);
    const { name_One, name_Two, title } = props;
    this.title = title;
    this.name_One = name_One;
    this.name_Two = name_Two;

    this.state = { selectedOption: '' };
    this.radioChange = this.radioChange.bind(this);
  }

  radioChange(event) {
    this.setState({ selectedOption: event.currentTarget.value });
  }

  render() {
    let className_One = '';
    let className_Two = '';
    switch (this.state.selectedOption) {
      default:
      case this.name_One:
        className_One = 'active';
        className_Two = '';
        break;
      case this.name_Two:
        className_One = '';
        className_Two = 'active';
        break;
    }

    return (
      <p>
        <span>{this.title}</span>
        <label className={`selectBtn right_borderRadius ${className_One}`} htmlFor={this.name_One}>{this.name_One}</label>
        <input
          id={this.name_One}
          type="radio"
          value={this.name_One}
          checked={this.state.selectedOption === this.name_One}
          onChange={this.radioChange}
        />

        <label
          className={`selectBtn left_borderRadius ${className_Two}`}
          htmlFor={this.name_Two}
        >
          {this.name_Two}
        </label>
        <input
          id={this.name_Two}
          type="radio"
          value={this.name_Two}
          checked={this.state.selectedOption === this.name_Two}
          onChange={this.radioChange}
        />

      </p>
    );
  }
}
export default SearchBy;
