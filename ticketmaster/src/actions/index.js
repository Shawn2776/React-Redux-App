import Axios from 'axios';

export const FETCH_IMAGE_START = 'FETCH_IMAGE_START';
export const FETCH_IMAGE_SUCCESS = 'FETCH_IMAGE_SUCCESS';
export const FETCH_IMAGE_FAIL = 'FETCH_IMAGE_FAIL';

export const getImage = () => dispatch => {
  dispatch({ type: FETCH_IMAGE_START});
  Axios
    .get('https://dog.ceo/api/breeds/image/random')
    .then((res) => {
      console.log(res.data.message)
      dispatch({ type: FETCH_IMAGE_SUCCESS, payload: res.data.message})
    })
    .catch((err) => {
      dispatch({ type: FETCH_IMAGE_FAIL, payload: err})
    })
}