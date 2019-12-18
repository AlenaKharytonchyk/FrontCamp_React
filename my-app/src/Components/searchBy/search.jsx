import React from 'react';
import './search.scss';

class SearchBy extends React.Component {
  render() {
    const {
      name_One, name_Two, title, onClick, selected,
    } = this.props;
    let className_One = '';
    let className_Two = '';
    switch (selected) {
      default:
      case name_One:
        className_One = 'active';
        className_Two = '';
        break;
      case name_Two:
        className_One = '';
        className_Two = 'active';
        break;
    }

    const onChange = ({ currentTarget }) => { onClick(currentTarget.value); };

    return (
      <p>
        <span>{title}</span>
        <label className={`selectBtn right_borderRadius ${className_One}`} htmlFor={name_One}>{name_One}</label>
        <input
          id={name_One}
          type="radio"
          value={name_One}
          checked={selected === name_One}
          onChange={onChange}
        />

        <label
          className={`selectBtn left_borderRadius ${className_Two}`}
          htmlFor={name_Two}
        >
          {name_Two}
        </label>
        <input
          id={name_Two}
          type="radio"
          value={name_Two}
          checked={selected === name_Two}
          onChange={onChange}
        />

      </p>
    );
  }
}
export default SearchBy;
