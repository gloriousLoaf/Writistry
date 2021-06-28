/* BLOG REDUCERS */
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
  BLOG_DELETE_REQUEST,
  BLOG_DELETE_SUCCESS,
  BLOG_DELETE_FAIL,
} from '../constants/blogConstants';

export const blogListReducer = (state = { blogposts: [] }, action) => {
  switch (action.type) {
    case BLOG_LIST_REQUEST:
      return { loading: true, blogposts: [] };
    case BLOG_LIST_SUCCESS:
      return { loading: false, blogposts: action.payload };
    case BLOG_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const blogByIdReducer = (state = { blogpost: {} }, action) => {
  switch (action.type) {
    case BLOG_BY_ID_REQUEST:
      return { loading: true, blogpost: {} };
    case BLOG_BY_ID_SUCCESS:
      return { loading: false, blogpost: action.payload };
    case BLOG_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const blogCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOG_CREATE_REQUEST:
      return { loading: true };
    case BLOG_CREATE_SUCCESS:
      return { loading: false, success: true, blogpost: action.payload };
    case BLOG_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const blogUpdateReducer = (state = { blogpost: {} }, action) => {
  switch (action.type) {
    case BLOG_UPDATE_REQUEST:
      return { loading: true };
    case BLOG_UPDATE_SUCCESS:
      return { loading: false, success: true, blogpost: action.payload };
    case BLOG_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const blogDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOG_DELETE_REQUEST:
      return { loading: true };
    case BLOG_DELETE_SUCCESS:
      return { loading: false, success: true };
    case BLOG_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
