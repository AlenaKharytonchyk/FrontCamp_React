import React from 'react';

const CardContainer = (props) => {
  const {poster_path, title, id, genres, release_date} = props;
  return (
    <div className='card-container' id = {id}>
      <img src={poster_path} alt={title}/>
      <p>{title}</p>
      <p>{genres.join(' & ')}</p>
      <p>{ (new Date(release_date)).getFullYear()}</p>
    </div>
  );
};


export default CardContainer;

