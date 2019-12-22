import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './searchForm/searchForm';
import TitleText from './titleText/title';
import SearchBy from '../shared_components/searchBy/search';
import SearchResultString from './searchResultString/searchResult';
import PageContainer from '../shared_components/headerFooter/headerFooter';
import background from '../media/collage_.png';
import MovieList from './movieList/movieList';

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

export default SearchPage;
