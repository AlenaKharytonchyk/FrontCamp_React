import { searchResults, searchResultsBy, sortResultsBy } from './actions';
import movieApp from './reducer';

describe('actions', () => {
  it('should create an action to add search results', () => {
    const data = 'search results';
    const expectedAction = {
      type: "searchResults",
      movies: data
    };
    expect(searchResults(data)).toEqual(expectedAction)
  });

  it('should create an action to search results by title or genre', () => {
    const searchBy = 'search results by title or genre';
    const expectedAction = {
      type: "searchBy",
      searchBy
    };
    expect(searchResultsBy(searchBy)).toEqual(expectedAction)
  });

  it('should create an action to sort results by year or rating', () => {
    const sortBy = 'sort results by by year or rating';
    const expectedAction = {
      type: "sortBy",
      sortBy
    };
    expect(sortResultsBy(sortBy)).toEqual(expectedAction)
  })
});

describe('reducers', () => {
  it('should return movies from search form', ()=> {
    const movies = [];
    const state = {foo: "bar"};
    const action = {
      type: "searchResults",
      movies
    };
    expect(movieApp(state, action)).toEqual({foo: "bar", movies})
  });

  it('should return movies from search form sorted by title or genre', ()=> {
    const searchBy = [];
    const state = {foo: "bar"};
    const action = {
      type: "searchBy",
      searchBy
    };
    expect(movieApp(state, action)).toEqual({foo: "bar", searchBy})
  });

  it('should return movies from search form sorted by year or rating', ()=> {
    const sortBy = [];
    const state = {foo: "bar"};
    const action = {
      type: "sortBy",
      sortBy
    };
    expect(movieApp(state, action)).toEqual({foo: "bar", sortBy})
  });

  it('should return particular movies', ()=> {
    const movie = [];
    const state = {foo: "bar"};
    const action = {
      type: "getMovie",
      movie
    };
    expect(movieApp(state, action)).toEqual({foo: "bar", movie})
  });

  it('should return similar movies', ()=> {
    const commonMovies = [];
    const state = {foo: "bar"};
    const action = {
      type: "getCommonMovies",
      commonMovies
    };
    expect(movieApp(state, action)).toEqual({foo: "bar", commonMovies})
  });
});
