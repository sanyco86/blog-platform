import * as types from 'constants/actionTypes/PostActionTypes'
import { API_CALL } from 'middleware/API'

export const receivePost = (response) => ({
  type: types.FETCH_POST_SUCCESS,
  response
});

export function fetchPost(id) {
  return {
    [API_CALL]: {
      endpoint: `/posts/${id}`,
      method: 'GET',
      query: {},
      types: {
        request: types.FETCH_POST_REQUEST,
        success: types.FETCH_POST_SUCCESS,
        errors: types.FETCH_POST_ERROR
      }
    }
  };
}

export function updatePost(values) {
  return {
    [API_CALL]: {
      endpoint: `/posts/${values.id}`,
      method: 'PATCH',
      query: {},
      types: {
        request: types.UPDATE_POST_REQUEST,
        success: types.UPDATE_POST_SUCCESS,
        errors: types.UPDATE_POST_ERROR
      }
    }
  };
}
