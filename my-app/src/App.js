import React from 'react';
import './App.scss';
import SearchForm from "./Components/searchForm/searchForm";
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
      <main className='main-container'>
        <header>
          <div>
            <TitleText/>
            <SearchForm/>
            <SearchBy name_One = 'TITLE' name_Two = 'GENRE' title='SEARCH BY'/>
          </div>
        </header>
        <section className='search-by'>7 movies found
          <SearchBy name_One = 'RELEASE DATE' name_Two = 'RATING' title='SORT BY'/>
        </section>
        <section className='cards-section'>
          <CardContainer {...film}/>
          <CardContainer {...film}/>
          <CardContainer {...film}/>
          <CardContainer {...film}/>
          <CardContainer {...film}/>
          <CardContainer {...film}/>
          <CardContainer {...film}/>
          <CardContainer {...film}/>
          <CardContainer {...film}/>
          <CardContainer {...film}/>
          <CardContainer {...film}/>
          {/*<MovieCard {...film}/>*/}
        </section>
      </main>
    </div>
  );
}

export default App;
