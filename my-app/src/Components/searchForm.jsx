import React from 'react';
import SubmitButton from "./submitBtn/submitBtn";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: ''};

    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){
    alert(`${this.state.search}, good choice!`);
    event.preventDefault();
  }

  onChangeSearch(event) {
    this.setState({search: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <p><label><input type="text" name="search" value={this.state.search}
                                 onChange={this.onChangeSearch}/></label></p>
        <p><SubmitButton name = 'SEARCH' className = 'button active'/></p>

      </form>
    );
  }
}
export default SearchForm;
