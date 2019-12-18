import React from 'react';
import qs from 'query-string';
import SubmitButton from '../submitBtn/submitBtn';
import './searchForm.scss';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.click({});
  }

  componentDidUpdate(prevProps) {
    const { search, searchBy } = qs.parse(this.props.location.search);
    const { search: prevSearch, searchBy: prevSearchBy } = qs.parse(prevProps.location.search);

    if (search !== prevSearch || searchBy !== prevSearchBy) {
      this.props.click({ searchBy, search });
    }
  }

  onSubmit(event) {
    const { selected } = this.props;
    this.props.history.push({
      pathname: '/search',
      search: `search=${this.state.search}&searchBy=${selected === 'GENRE' ? 'genres' : 'title'}`,
    });
    event.preventDefault();
  }

  onChangeSearch(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.onSubmit}>
        <div className="search-field">
          <label>
            <input
              placeholder="What are you looking for?"
              type="text"
              name="search"
              value={this.state.search}
              onChange={this.onChangeSearch}
            />
          </label>
        </div>
        <div className="search-btn">
          <SubmitButton name="SEARCH" className="button active" />
        </div>
      </form>
    );
  }
}
export default SearchForm;
