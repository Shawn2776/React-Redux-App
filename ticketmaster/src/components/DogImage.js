import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getImage } from '../actions/index';

function DogImage({ error, getImage, isFetching, message }) {

  useEffect(() => {
    getImage()
  }, [])

  const clickHandler = () => {
    getImage();
  }

  if (error) {
    return <h2>Houston, we have a problem ... {error}</h2>
  }

  if (isFetching) {
    return <h2>Fetching the cutest pic ever, just for you!!</h2>
  }


  return (
    <div className="dog-images">
      <button onClick={clickHandler} >Get New Dog Image</button>
      <hr />
      <img src={message} alt="dog picture"/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    message: state.message,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getImage })(DogImage);
