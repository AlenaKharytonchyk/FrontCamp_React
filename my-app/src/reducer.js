function movieApp(state = { movies: [] }, action) {
  switch (action.type) {
    case 'searchResults':
      return { ...state, movies: action.movies };
    default:
      return state;
  }
}

export default movieApp;
