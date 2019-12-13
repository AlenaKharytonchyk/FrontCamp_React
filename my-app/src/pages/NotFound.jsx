import React from 'react';
import SearchForm from "../Components/searchForm/searchForm";
import TitleText from "../Components/titleText/title";
import SearchBy from "../Components/searchBy/search";
import NoResults from "../Components/notFound/notFound";
import PageContainer from "../Components/headerFooter/headerFooter";
import background from '../media/collage_.png'

const NotFound = () => {

  return (
    <PageContainer>
      <main className="main-container">
        <header style={{backgroundImage: `url(${background})`}} >
          <div className="header">
            <TitleText/>
            <SearchForm/>
            <SearchBy name_One = 'TITLE' name_Two = 'GENRE' title = 'SEARCH BY'/>
          </div>
        </header>
        <section className="search-by">
          <SearchBy name_One = 'RELEASE DATE' name_Two = 'RATING' title='SORT BY'/>
        </section>
        <section className="cards-section">
          <NoResults/>
        </section>
      </main>
    </PageContainer>
  );
};

export default NotFound;
