import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getImage } from '../actions/index';

function DogImage(props) {

  useEffect(() => {
    props.getImage()
  }, [])

  const clickHandler = () => {
    props.getImage();
  }

  if (props.error) {
    return <h2>Houston, we have a problem ... {props.error}</h2>
  }

  if (props.isFetching) {
    return <h2>Fetching the cutest pic ever, just for you!!</h2>
  }


  return (
    <div className="dog-images">
      <button onClick={clickHandler} >Get New Dog Image</button>
      <hr />
      <img src={props.message} alt="dog picture"/>
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
