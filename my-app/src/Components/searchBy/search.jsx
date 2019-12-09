import React from 'react';
import './search.scss';

class SearchBy extends React.Component {
  constructor(props){
    super(props);
    const {name_One, name_Two, className} = props;
    this.className = className;
    this.name_One = name_One;
    this.name_Two = name_Two;

    this.state = {selectedOption: '', active: false};
    this.radioChange = this.radioChange.bind(this);

  }

  radioChange(event){
    this.setState({selectedOption: event.currentTarget.value});
  }

  render() {
    return (
        <p>
          <input id = {this.name_One}
                 type="radio"
                 value={this.name_One}
                 checked={this.state.selectedOption === this.name_One}
                 onChange={this.radioChange} />
                 <label className = 'selectBtn right_borderRadius active' htmlFor={this.name_One}>{this.name_One}</label>

          <input id = {this.name_Two}
                 type="radio"
                 value={this.name_Two}
                 checked={this.state.selectedOption === this.name_Two}
                 onChange={this.radioChange}/>
                 <label className = 'selectBtn left_borderRadius'
                        htmlFor={this.name_Two}>{this.name_Two}
                        onClick={this.toggleLiked}
                 </label>
        </p>
    );
  }
}
export default SearchBy;
