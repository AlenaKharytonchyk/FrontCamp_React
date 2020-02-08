import React from 'react';
import {shallow} from "enzyme";
import SearchForm from "../src/presentational_components/searchForm/searchForm";
import SearchResultBy from "../src/shared_components/searchResult_forMovie_page/searchResultBy";
import Footer from "../src/shared_components/footer/footer";
import CardContainer from "../src/presentational_components/cardContainer/cardContainer";
import MovieCard from "../src/presentational_components/movieCard/movieCard";
import MovieList from "../src/presentational_components/movieList/movieList";
import NotFound from "../src/presentational_components/NotFound";
import TitleText from "../src/presentational_components/titleText/title";
import PageContainer from "../src/shared_components/headerFooter/headerFooter";
import SearchBy from "../src/shared_components/searchBy/search";
import SubmitButton from "../src/shared_components/submitBtn/submitBtn";

it('should render an search form', () => {
  const wrapper = shallow(
    <SearchForm click = {()=>{}}>Hello Jest!</SearchForm>
  );
  expect(wrapper).toMatchSnapshot();
});

it('should render a title text', () => {
  const wrapper = shallow(
    <TitleText/>
  );
  expect(wrapper).toMatchSnapshot();
});

describe('When Search by is rendered', function () {
  const obj = {
    name_One: "Name One",
    name_Two: "Name Two",
    title: "title",
    onClick: () => {},
  };

  it('should select first name when it is passed as selected', function () {
    const wrapper = shallow(
      <SearchBy selected={obj.name_One} {...obj}/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should select second name when it is passed as selected', function () {
    const wrapper = shallow(
      <SearchBy selected={obj.name_Two} {...obj}/>
    );
    expect(wrapper).toMatchSnapshot();
  });

});

it('should render a title text', () => {



});

describe('When submit button is rendered', function () {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <SubmitButton name='MyName' className='Class-name'/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('When footer is rendered', function () {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <Footer>Hello Jest!</Footer>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('When SearchResultBy is rendered', function () {
  let wrapper;
  beforeAll(function() {
    wrapper = shallow(
      <SearchResultBy value="Action" />
    );
  });

  it('should render as expected', function () {
    expect(wrapper).toMatchSnapshot();
  });

  it('should display title as expected', function () {
    expect(wrapper.text()).toEqual('Films by Action Genre')
  });
});

it('should render an search by filter', () => {
  const wrapper = shallow(
    <SearchResultBy>Hello Jest!</SearchResultBy>
  );
  expect(wrapper).toMatchSnapshot();
});

it('should render card container with genres', () => {
  const obj = {
    poster_path: 'path',
    title: 'title',
    id: 'id',
    genres: ['genres'],
    release_date: '20-09-2020',
  };
  const wrapper = shallow(
    <CardContainer {...obj}>Hello Jest!</CardContainer>
  );
  expect(wrapper).toMatchSnapshot();
});

it('should render card container without genres', () => {
  const obj = {
    poster_path: 'path',
    title: 'title',
    id: 'id',
    genres: [],
    release_date: '20-09-2020',
  };
  const wrapper = shallow(
    <CardContainer {...obj}>Hello Jest!</CardContainer>
  );
  expect(wrapper).toMatchSnapshot();
});

it('should render movie card', () => {
  const obj = {
    poster_path: 'path',
    title: 'title',
    id: 'id',
    release_date: '20-09-2020',
    vote_average: 'vote_average',
    runtime: 'runtime',
    overview: 'overview'
  };

  const wrapper = shallow(
    <MovieCard {...obj}>Hello Jest!</MovieCard>
  );
  expect(wrapper).toMatchSnapshot();
});

