import React from 'react';
import SearchBy from "../Components/searchBy/search";
import CardContainer from "../Components/cardContainer/cardContainer";
import MovieCard from "../Components/movieCard/movieCard";
import SearchResultBy from "../Components/searchResult_forMovie_page/searchResultBy";

function MovieInfo({film}) {

  return (
    <main className='main-container'>
      <header>
        <MovieCard {...film}/>
      </header>
      <section className='search-by'>
        <SearchResultBy/>
      </section>
      <section className='cards-section'>
        <CardContainer {...film}/>
        <CardContainer {...film}/>
        <CardContainer {...film}/>
        <CardContainer {...film}/>
        <CardContainer {...film}/>
        <CardContainer {...film}/>
        <CardContainer {...film}/>
        <CardContainer {...film}/>
        <CardContainer {...film}/>
        <CardContainer {...film}/>
        <CardContainer {...film}/>
      </section>
    </main>
  );
}

export default MovieInfo;
