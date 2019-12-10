import React from 'react';
import './movieCard.scss'

const MovieCard = (props) => {
  const {poster_path, title, id, release_date, vote_count, runtime, overview} = props;
  return (
    <div className='movie-container' id = {id}>
      <img src={poster_path} alt={title}/>
      <section>
        <div className='title-section'>
          <span className='title'>{title}</span>
          <span className='rate'>{vote_count}</span>
        </div>
        <div className='number-block'>
          <section>
            <span className='number'>{ (new Date(release_date)).getFullYear()}</span>
            <span className='text'>year</span>
          </section>
          <section>
            <span className='number'>{runtime}</span>
            <span className='text'>min</span>
          </section>
        </div>
        <div className='overview'>{overview}</div>
      </section>

    </div>
  );
};

export default MovieCard;
