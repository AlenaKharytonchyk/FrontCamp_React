import React from 'react';
import SubmitButton from "../submitBtn/submitBtn";
import './searchForm.scss';

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
      <form className="search-form" onSubmit={this.onSubmit}>
        <div className="search-field">
          <label>
            <input placeholder="What are you looking for?" type="text" name="search" value={this.state.search}
                   onChange={this.onChangeSearch}/>
          </label>
        </div>
        <div className="search-btn"><SubmitButton name = 'SEARCH' className = 'button active'/></div>
      </form>
    );
  }
}
export default SearchForm;
