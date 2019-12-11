import React from 'react';
import SearchBy from "../Components/searchBy/search";
import CardContainer from "../Components/cardContainer/cardContainer";
import MovieCard from "../Components/movieCard/movieCard";

function MovieInfo({film}) {

  return (
    <main className='main-container'>
      <header>
        <MovieCard {...film}/>
      </header>
      <section className='search-by'>7 movies found
        <SearchBy name_One = 'RELEASE DATE' name_Two = 'RATING' title='SORT BY'/>
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
