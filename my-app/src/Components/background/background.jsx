import React from 'react';
import './background.scss'

class Background extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    fetch("https://reactjs-cdp.herokuapp.com/movies?limit=100")
      .then(req => req.json())
      .then(({data}) => this.setState({"movies": data}))
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="background">
        { movies.map(movie => <img alt={movie.title} src={movie.poster_path} />) }
      </div>
    );
  }

}

export default Background;
