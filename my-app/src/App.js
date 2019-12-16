import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieInfo from './pages/Movie_info';
import SearchPage from './pages/Search';
import NotFound from './pages/NotFound';
import ErrorBoundary from './Components/ErrorBoundry/errorBoundry';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { movies: [] };
  // }
  //
  // componentDidMount() {
  //   fetch('https://reactjs-cdp.herokuapp.com/movies?limit=30')
  //     .then((req) => req.json())
  //     .then(({ data }) => this.setState({ movies: data }));
  // }

  render() {
    // const { movies } = this.state;
    return (
      <Router>
        <div className="App">
          <ErrorBoundary>
            <Switch>
              <Route path="/" component={SearchPage} />
              <Route path="/film/:id" component={MovieInfo} />
              <Route component={NotFound} />
            </Switch>
          </ErrorBoundary>
        </div>
      </Router>
    );
  }
}

export default App;
