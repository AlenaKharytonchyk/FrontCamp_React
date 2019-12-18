function movieApp(state = { movies: [], commonMovies: [] }, action) {
  switch (action.type) {
    case 'searchResults':
      return { ...state, movies: action.movies };
    case 'searchBy':
      return { ...state, searchBy: action.searchBy };
    case 'sortBy':
      return { ...state, sortBy: action.sortBy };
    case 'getMovie':
      return { ...state, movie: action.movie };
    case 'getCommonMovies':
      return { ...state, commonMovies: action.commonMovies };
    default:
      return state;
  }
}

export default movieApp;
