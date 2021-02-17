
import './App.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getImage } from './actions';

const App = (props) => {
  const { image, isFetching, error, fetchImageLoading } = props;

  const handleClick = (e) => {
    e.preventDefault();
    props.getImage();
  }

  useEffect(() => {
    props.getImage();
  }, [])

  if (error) {
    return <div className="App"><h2>We got an error: {error}</h2></div>
  }

  if (isFetching) {
    return <div className="App"><h2>Fetching an Image for you!</h2></div>
  }

  return (
    <div className="App">
      <h2>Random Food Image</h2>
      <button onClick={handleClick}>Get new Image</button>
      <img src={image} alt='food'/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    image: state.image,
    isFetching: state.isFetching,
    error: state.error,
  }
}

export default connect(mapStateToProps, { getImage })(App);
