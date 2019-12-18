import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchForm from '../Components/searchForm/searchForm';
import TitleText from '../Components/titleText/title';
import SearchBy from '../Components/searchBy/search';
import CardContainer from '../Components/cardContainer/cardContainer';
import SearchResultString from '../Components/searchResultString/searchResult';
import PageContainer from '../Components/headerFooter/headerFooter';
import background from '../media/collage_.png';

const SearchPage = ({
  movies, onSearch, onSearchByChange, searchBy, onSortByChange, sortBy,
}) => (
  <PageContainer>
    <main className="main-container">
      <header style={{ backgroundImage: `url(${background})` }}>
        <div className="header">
          <TitleText />
          <SearchForm click={onSearch} selected={searchBy} />
          <SearchBy name_One="TITLE" name_Two="GENRE" title="SEARCH BY" onClick={onSearchByChange} selected={searchBy} />
        </div>
      </header>
      <section className="search-by">
        <SearchResultString resultAmount={movies.length} />
        <SearchBy name_One="RELEASE DATE" name_Two="RATING" title="SORT BY" onClick={onSortByChange} selected={sortBy} />
      </section>
      <section className="cards-section">
        {movies.map((movie) => <CardContainer key={movie.id} {...movie} />)}
      </section>
    </main>
  </PageContainer>
);

SearchPage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

function mapState(state) {
  return { movies: state.movies, searchBy: state.searchBy };
}

function mapDispatch(dispatch) {
  return {
    onSearch({ searchBy, search }) {
      fetch(`https://reactjs-cdp.herokuapp.com/movies?searchBy=${searchBy}&search=${search}`)
        .then((req) => req.json())
        .then(({ data }) => dispatch({ type: 'searchResults', movies: data }));
    },
    onSearchByChange(searchBy) {
      dispatch({ type: 'searchBy', searchBy });
    },
    onSortByChange(sortBy) {
      dispatch({ type: 'sortBy', sortBy });
    },
  };
}

// Connect them:
export default connect(mapState, mapDispatch)(SearchPage);
