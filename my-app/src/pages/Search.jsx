import React from 'react';
import SearchForm from "../Components/searchForm/searchForm";
import TitleText from "../Components/titleText/title";
import SearchBy from "../Components/searchBy/search";
import CardContainer from "../Components/cardContainer/cardContainer";
import SearchResultString from "../Components/searchResultString/searchResult";
import Footer from "../Components/footer/footer";

function SearchPage({movies}) {

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
          <SearchResultString resultAmount={movies.length}/>
          <SearchBy name_One = 'RELEASE DATE' name_Two = 'RATING' title='SORT BY'/>
        </section>
        <section className='cards-section'>
          {movies.map(movie => <CardContainer key={movie.id} {...movie}/>)}
        </section>
        <Footer/>
      </main>
  );
}

export default SearchPage;
