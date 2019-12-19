import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchForm from '../Components/searchForm/searchForm';
import TitleText from '../Components/titleText/title';
import SearchBy from '../Components/searchBy/search';
import SearchResultString from '../Components/searchResultString/searchResult';
import PageContainer from '../Components/headerFooter/headerFooter';
import background from '../media/collage_.png';
import MovieList from '../Components/movieList/movieList';
import { searchResults, searchResultsBy, sortResultsBy } from '../actions';

const SearchPage = ({
  movies, onSearch, onSearchByChange, searchBy, onSortByChange, sortBy, ...other
}) => (
  <PageContainer>
    <main className="main-container">
      <header style={{ backgroundImage: `url(${background})` }}>
        <div className="header">
          <TitleText />
          <SearchForm click={onSearch} selected={searchBy} {...other} />
          <SearchBy name_One="TITLE" name_Two="GENRE" title="SEARCH BY" onClick={onSearchByChange} selected={searchBy || 'TITLE'} />
        </div>
      </header>
      <section className="search-by">
        <SearchResultString resultAmount={movies.length} />
        <SearchBy name_One="RELEASE DATE" name_Two="RATING" title="SORT BY" onClick={onSortByChange} selected={sortBy || 'RELEASE DATE'} />
      </section>
      <section className="cards-section">
        <MovieList sortBy={sortBy || 'RELEASE DATE'} movies={movies} />
      </section>
    </main>
  </PageContainer>
);

SearchPage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

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

// Connect them:
export default connect(mapState, mapDispatch)(SearchPage);
