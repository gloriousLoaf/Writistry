/* USER ACTIONS */
import {
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_LIST_FAIL,
  BLOG_BY_ID_REQUEST,
  BLOG_BY_ID_SUCCESS,
  BLOG_BY_ID_FAIL,
  BLOG_CREATE_REQUEST,
  BLOG_CREATE_SUCCESS,
  BLOG_CREATE_FAIL,
  BLOG_UPDATE_REQUEST,
  BLOG_UPDATE_SUCCESS,
  BLOG_UPDATE_FAIL,
} from '../constants/blogConstants';
import axios from 'axios';

// LIST
export const listPosts = () => async (dispatch) => {
  try {
    dispatch({ type: BLOG_LIST_REQUEST });

    const { data } = await axios.get('/api/blogs');

    dispatch({
      type: BLOG_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BLOG_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// BY ID
export const getPostById = (id) => async (dispatch) => {
  try {
    dispatch({ type: BLOG_BY_ID_REQUEST });

    const { data } = await axios.get(`/api/blogs/${id}`);

    dispatch({
      type: BLOG_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BLOG_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// CREATE
export const createPost = (name, byline, content) => async (dispatch) => {
  try {
    dispatch({
      type: BLOG_CREATE_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/blogs',
      { name, byline, content },
      config
    );

    dispatch({
      type: BLOG_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BLOG_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// UPDATE
export const updatePost = (name, byline, content) => async (dispatch) => {
  try {
    dispatch({
      type: BLOG_UPDATE_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/blogs',
      { name, byline, content },
      config
    );

    dispatch({
      type: BLOG_UPDATE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: BLOG_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BLOG_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
