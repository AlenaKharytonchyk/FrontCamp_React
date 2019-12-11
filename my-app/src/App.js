import React from 'react';
import './App.scss';
import MovieInfo from "./pages/Movie_info";
import SearchPage from "./pages/Search";
import NotFound from "./pages/NotFound";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {movies: []};
  }

  componentDidMount() {
    fetch("https://reactjs-cdp.herokuapp.com/movies?limit=30")
      .then(req => req.json())
      .then(({data}) => this.setState({"movies": data}))
  }

  render () {
    const {movies} = this.state;
    return (
    <div className="App">
    <SearchPage movies={movies}/>
    <div className='temp-devider'></div>
    <MovieInfo movies={movies}/>
    <div className='temp-devider'></div>
    <NotFound/>
    </div>
  );
}

}

export default App;
