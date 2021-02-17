import axios from 'axios';

export const FETCH_IMAGE_LOADING = 'FETCH_IMAGE_LOADING';
export const FETCH_IMAGE_SUCCESS = 'FETCH_IMAGE_SUCCESS'
export const FETCH_IMAGE_FAIL = 'FECH_IMAGE_FAIL';

export const getImage = () => dispatch => {
  dispatch(fetchImageLoading());

    axios
      .get('https://foodish-api.herokuapp.com/api/')
      .then((res) => {
        dispatch(fetchImageSuccess(res.data.image))
      })
      .catch((err) => {
        alert(err)
      })
  }


export const fetchImageLoading = () => {
  return({
    type: FETCH_IMAGE_LOADING,
  })
}

export const fetchImageSuccess = (image) => {
  return({
    type: FETCH_IMAGE_SUCCESS,
    payload: image,
  })
}

export const fetchImageFail = (error) => {
  return({
    type: FETCH_IMAGE_FAIL,
    payload: error,
  })
}