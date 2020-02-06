import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieInfo from './container_components/Movie_info_container';
import SearchPage from './container_components/Search_container';
import NotFound from './presentational_components/NotFound';
import ErrorBoundary from './shared_components/ErrorBoundry/errorBoundry';

function App() {
  return (
    <Router>
      <div className="App">
        <ErrorBoundary>
          <Switch>
            <Route path="/film/:id" component={MovieInfo} />
            <Route path="/search" component={SearchPage} />
            <Route exact path="/" component={SearchPage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
