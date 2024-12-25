import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div style={styles.card}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={styles.image}
      />
      <h3 style={styles.title}>{movie.title}</h3>
      <Link to={`/video/${movie.id}`} style={styles.link}>
        Watch Now
      </Link>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    textAlign: 'center',
    backgroundColor: '#222',
    color: 'white',
    padding: '10px',
    width: '200px',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
  },
  title: {
    fontSize: '18px',
    margin: '10px 0',
  },
  link: {
    textDecoration: 'none',
    color: '#007BFF',
    fontSize: '16px',
  },
};

export default MovieCard;
