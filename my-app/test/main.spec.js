import React from 'react';
import {shallow} from "enzyme";
import SearchForm from "../src/Components/searchForm/searchForm";
import SearchResultBy from "../src/Components/searchResult_forMovie_page/searchResultBy";
import Footer from "../src/Components/footer/footer";
import CardContainer from "../src/Components/cardContainer/cardContainer";
import MovieCard from "../src/Components/movieCard/movieCard";

it('should render an search form', () => {
  const wrapper = shallow(
    <SearchForm>Hello Jest!</SearchForm>
  );
  expect(wrapper).toMatchSnapshot();
});

it('should render an search by filter', () => {
  const wrapper = shallow(
    <SearchResultBy>Hello Jest!</SearchResultBy>
  );
  expect(wrapper).toMatchSnapshot();
});

it('should render footer', () => {
  const wrapper = shallow(
    <Footer>Hello Jest!</Footer>
  );
  expect(wrapper).toMatchSnapshot();
});

it('should render card container', () => {
  const wrapper = shallow(
    <CardContainer>Hello Jest!</CardContainer>
  );
  expect(wrapper).toMatchSnapshot();
});

it('should render movie card', () => {
  const wrapper = shallow(
    <MovieCard>Hello Jest!</MovieCard>
  );
  expect(wrapper).toMatchSnapshot();
});

it('should render a movie card with a title of the film', () => {
  const wrapper = shallow(
    <MovieCard>Hello Jest!</MovieCard>
  );
  expect(wrapper.prop('title')).not.toBeNull();
});

it('should render a img to the film in the movie card', () => {
  const wrapper = shallow(
    <MovieCard>Hello Jest!</MovieCard>
  );
  expect(wrapper.prop('poster_path')).not.toBeNull();
});

