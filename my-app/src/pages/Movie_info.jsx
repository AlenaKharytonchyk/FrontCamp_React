import React from 'react';
import CardContainer from "../Components/cardContainer/cardContainer";
import MovieCard from "../Components/movieCard/movieCard";
import SearchResultBy from "../Components/searchResult_forMovie_page/searchResultBy";
import Footer from "../Components/footer/footer";
import PageContainer from "../Components/headerFooter/headerFooter";

function MovieInfo({movies}) {
  const [movie] = movies;
  // const movie = movies.find(movie => movie.genres.length);
  if(!movie){
    return null
  }

  const sameGenreMovies = movies.filter(({id, genres}) => movie.id !== id && movie.genres.filter(genre => genres.includes(genre)).length);
  console.log(sameGenreMovies)
  return (
    <PageContainer>
      <main className='main-container'>
        <header>
          <MovieCard {...movie}/>
        </header>
        <section className='search-by'>
          <SearchResultBy value={movie.genres.join(' & ')}/>
        </section>
        <section className='cards-section'>
          {/*{movies.map(elem => <CardContainer {...elem}/>)}*/}
          {sameGenreMovies.map(elem => <CardContainer key={movie.id + '-info'} {...elem}/>)}
        </section>
      </main>
    </PageContainer>
  );
}

export default MovieInfo;
