import { connect } from 'react-redux';
import SearchPage from '../presentational_components/Search';
import { searchResults, searchResultsBy, sortResultsBy } from '../actions';

function mapState(state) {
  return { movies: state.movies, searchBy: state.searchBy, sortBy: state.sortBy };
}

function mapDispatch(dispatch) {
  return {
    onSearch({ searchBy, search }) {
      fetch(`https://reactjs-cdp.herokuapp.com/movies?searchBy=${searchBy}&search=${search}`)
        .then((req) => req.json())
        .then(({ data }) => dispatch(searchResults(data)));
    },
    onSearchByChange(searchBy) {
      dispatch(searchResultsBy(searchBy));
    },
    onSortByChange(sortBy) {
      dispatch(sortResultsBy(sortBy));
    },
  };
}

export default connect(mapState, mapDispatch)(SearchPage);
