import React from 'react';
import SearchForm from "../Components/searchForm/searchForm";
import TitleText from "../Components/titleText/title";
import SearchBy from "../Components/searchBy/search";
import CardContainer from "../Components/cardContainer/cardContainer";
import MovieCard from "../Components/movieCard/movieCard";
import SearchResultString from "../Components/searchResultString/searchResult";
import NoResults from "../Components/notFound/notFound";

function SearchPage({film}) {

   return (
      <main className='main-container'>
        <header>
          <div className='header'>
            <TitleText/>
            <SearchForm/>
            <SearchBy name_One = 'TITLE' name_Two = 'GENRE' title='SEARCH BY'/>
          </div>
        </header>
        <section className='search-by'>
          <SearchResultString/>
          <SearchBy name_One = 'RELEASE DATE' name_Two = 'RATING' title='SORT BY'/>
        </section>
        <section className='cards-section'>
          <NoResults/>
          {/*<CardContainer {...film}/>*/}
          {/*<CardContainer {...film}/>*/}
          {/*<CardContainer {...film}/>*/}
          {/*<CardContainer {...film}/>*/}
          {/*<CardContainer {...film}/>*/}
          {/*<CardContainer {...film}/>*/}
          {/*<CardContainer {...film}/>*/}
          {/*<CardContainer {...film}/>*/}
          {/*<CardContainer {...film}/>*/}
          {/*<CardContainer {...film}/>*/}
          {/*<CardContainer {...film}/>*/}
        </section>
      </main>
  );
}

export default SearchPage;
