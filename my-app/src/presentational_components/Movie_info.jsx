import React, { Component } from 'react';
import MovieCard from './movieCard/movieCard';
import SearchResultBy from '../shared_components/searchResult_forMovie_page/searchResultBy';
import PageContainer from '../shared_components/headerFooter/headerFooter';
import background from '../media/collage_.png';
import MovieList from './movieList/movieList';

class MovieInfo extends Component {
  componentDidMount() {
    const { getMovie } = this.props;
    getMovie(this.props.match.params);
  }

  componentDidUpdate(prevProps) {
    const { getMovie, getCommonMovies, movie } = this.props;

    if (this.props.match.params.id !== prevProps.match.params.id) {
      getMovie(this.props.match.params);
    }

    if ((!prevProps.movie && movie) || prevProps.movie.id !== movie.id) {
      getCommonMovies(movie);
    }
  }

  render() {
    const {
      commonMovies, movie,
    } = this.props;

    if (!movie) {
      return null;
    }

    const filteredMovies = commonMovies.filter(({ id }) => id !== movie.id);

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
            <MovieList movies={filteredMovies} />
          </section>
        </main>
      </PageContainer>
    );
  }
}

export default MovieInfo;
