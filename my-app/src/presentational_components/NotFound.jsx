import React from 'react';
import SearchForm from './searchForm/searchForm';
import TitleText from './titleText/title';
import SearchBy from '../shared_components/searchBy/search';
import NoResults from './notFound/notFound';
import PageContainer from '../shared_components/headerFooter/headerFooter';
import background from '../media/collage_.png';

const NotFound = () => (
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
        <SearchBy name_One="RELEASE DATE" name_Two="RATING" title="SORT BY" />
      </section>
      <section className="cards-section">
        <NoResults />
      </section>
    </main>
  </PageContainer>
);

export default NotFound;
