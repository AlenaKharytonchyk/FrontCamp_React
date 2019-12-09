import React from 'react';
import './App.css';
import SearchForm from "./Components/searchForm";
import TitleText from "./Components/titleText/title";
import SearchBy from "./Components/searchBy/search";

function App() {
  return (
    <div className="App">
      <TitleText/>
      <SearchForm/>
      <SearchBy name_One = 'TITLE' name_Two = 'GENRE' />
    </div>
  );
}

export default App;
