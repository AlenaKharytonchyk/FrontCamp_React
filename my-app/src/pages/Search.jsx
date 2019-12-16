import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../Components/searchForm/searchForm';
import TitleText from '../Components/titleText/title';
import SearchBy from '../Components/searchBy/search';
import CardContainer from '../Components/cardContainer/cardContainer';
import SearchResultString from '../Components/searchResultString/searchResult';
import PageContainer from '../Components/headerFooter/headerFooter';
import background from '../media/collage_.png';

const SearchPage = ({ movies }) => (
  <PageContainer>
    <main className="main-container">
      <header style={{ backgroundImage: `url(${background})` }}>
        <div className="header">
          <TitleText />
          <SearchForm />
          <SearchBy name_One="TITLE" name_Two="GENRE" title="SEARCH BY" />
        </div>
      </header>
      <section className="search-by">
        <SearchResultString resultAmount={movies.length} />
        <SearchBy name_One="RELEASE DATE" name_Two="RATING" title="SORT BY" />
      </section>
      <section className="cards-section">
        {movies.map((movie) => <CardContainer key={movie.id} {...movie} />)}
      </section>
    </main>
  </PageContainer>
);

SearchPage.propTypes = {
  movies: PropTypes.shape().isRequired,
};

export default SearchPage;
