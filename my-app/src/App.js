import React from 'react';
import './App.scss';
import MovieInfo from './pages/Movie_info';
import SearchPage from './pages/Search';
import NotFound from './pages/NotFound';
import PanicButton from './Components/panicBtn/panicButton';
import ErrorBoundary from './Components/ErrorBoundry/errorBoundry';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }

  componentDidMount() {
    fetch('https://reactjs-cdp.herokuapp.com/movies?limit=30')
      .then((req) => req.json())
      .then(({ data }) => this.setState({ movies: data }));
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        <ErrorBoundary>
          <SearchPage movies={movies} />
          <div className="temp-devider" />
          <MovieInfo movies={movies} />
          <div className="temp-devider" />
          <NotFound />
          {/* <PanicButton /> */}
        </ErrorBoundary>
      </div>


    );
  }
}

export default App;
