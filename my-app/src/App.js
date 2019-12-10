import React from 'react';
import './App.css';
import SearchForm from "./Components/searchForm";
import TitleText from "./Components/titleText/title";
import SearchBy from "./Components/searchBy/search";
import CardContainer from "./Components/cardContainer/cardContainer";
import MovieCard from "./Components/movieCard/movieCard";

function App() {

  const film =  {
    "id": 447365,
    "title": "Guardians of the Galaxy Vol. 3",
    "tagline": "",
    "vote_average": 0,
    "vote_count": 9,
    "release_date": "2020-05-01",
    "poster_path": "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg",
    "overview": "The third film based on Marvel's Guardians of the Galaxy.The third film based on Marvel's Guardians of the Galaxy.The third film based on Marvel's Guardians of the Galaxy.The third film based on Marvel's Guardians of the Galaxy.The third film based on Marvel's Guardians of the Galaxy.",
    "budget": 0,
    "revenue": 0,
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "runtime": '200'
  };

  return (
    <div className="App">
      <TitleText/>
      <SearchForm/>
      <SearchBy name_One = 'TITLE' name_Two = 'GENRE' />
      <CardContainer {...film}/>
      <MovieCard {...film}/>
    </div>
  );
}

export default App;
