import React from 'react';
import { Link } from 'react-router-dom';
import './cardContainer.scss';

const CardContainer = (props) => {
  const {
    poster_path, title, id, genres, release_date,
  } = props;

  return (
    <Link to={`/film/${id}`}>
      <div className="card-container" id={id}>
        <img src={poster_path} alt={title} />
        <span>{title}</span>
        <span>{genres.length ? genres.join(' & ') : null}</span>
        <span>{ (new Date(release_date)).getFullYear()}</span>
      </div>
    </Link>
  );
};


export default CardContainer;
