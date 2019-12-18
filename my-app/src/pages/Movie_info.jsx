import React from 'react';
import PropTypes from 'prop-types';
import CardContainer from '../Components/cardContainer/cardContainer';
import MovieCard from '../Components/movieCard/movieCard';
import SearchResultBy from '../Components/searchResult_forMovie_page/searchResultBy';
import PageContainer from '../Components/headerFooter/headerFooter';
import background from '../media/collage_.png';

const MovieInfo = ({ movies }) => {
  const [movie] = movies;
  // const movie = movies.find(movie => movie.genres.length);
  if (!movie) {
    return null;
  }

  const sameGenreMovies = movies.filter(({ id, genres }) => movie.id !== id && movie.genres
    .filter((genre) => genres.includes(genre)).length);
  return (
    <PageContainer>
      <main className="main-container">
        <header style={{ backgroundImage: `url(${background})` }}>
          <MovieCard {...movie} />
        </header>
        <section className="search-by">
          <SearchResultBy value={movie.genres.join(' & ')} />
        </section>
        <section className="cards-section">
          {/* {movies.map(elem => <CardContainer {...elem}/>)} */}
          {sameGenreMovies.map((elem) => <CardContainer key={`${movie.id}-info`} {...elem} />)}
        </section>
      </main>
    </PageContainer>
  );
};

MovieInfo.propTypes = {
  movies: PropTypes.shape().isRequired,
};

export default MovieInfo;
