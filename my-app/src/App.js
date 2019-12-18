import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieInfo from './pages/Movie_info';
import SearchPage from './pages/Search';
import NotFound from './pages/NotFound';
import ErrorBoundary from './Components/ErrorBoundry/errorBoundry';

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
