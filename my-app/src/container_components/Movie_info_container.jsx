import { connect } from 'react-redux';
import MovieInfo from '../presentational_components/Movie_info';

function mapState({ commonMovies, movie }) {
  return { commonMovies, movie };
}

function mapDispatch(dispatch) {
  return {
    getMovie({ id }) {
      fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
        .then((req) => req.json())
        .then((movie) => dispatch({ type: 'getMovie', movie }));
    },
    getCommonMovies({ genres = [] }) {
      fetch(`https://reactjs-cdp.herokuapp.com/movies/?filter=${genres.join(',')}`)
        .then((req) => req.json())
        .then(({ data }) => dispatch({ type: 'getCommonMovies', commonMovies: data }));
    },
  };
}

export default connect(mapState, mapDispatch)(MovieInfo);
