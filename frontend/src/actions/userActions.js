/* USER ACTIONS */
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_PASSWORD_REQUEST,
  USER_PASSWORD_SUCCESS,
  USER_PASSWORD_FAIL,
} from '../constants/userConstants';
import axios from 'axios';

// LOGIN
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// LOGOUT
export const logout = () => (dispatch) => {
  let clearKeys = ['userInfo'];
  clearKeys.forEach((key) => localStorage.removeItem(key));
  dispatch({ type: USER_LOGOUT });
  document.location.href = '/signin';
};

// REGISTER
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users',
      { name, email, password },
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// PROFILE BY ID
export const getUserProfileById = (id) => async (dispatch) => {
  try {
    dispatch({ type: USER_PROFILE_REQUEST });

    const { data } = await axios.get(`/api/users/profile/${id}`);

    dispatch({
      type: USER_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// UPDATE PROFILE
export const updateProfile =
  (name, email, bio) => async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_UPDATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      /**
       * @desc    If user deletes bio, submitting '',
       *          or if user submits a bunch of whitespace
       *          set bio = ' ' so mongodb replaces any existing bio.
       *          (mongo will not replace existing bio with '')
       */
      if (bio === '' || !bio.trim().length) {
        bio = ' ';
      }

      const { data } = await axios.put(
        '/api/users/profile/:id',
        { name, email, bio },
        config
      );

      dispatch({
        type: USER_UPDATE_SUCCESS,
        payload: data,
      });

      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// UPDATE PASSWORD
export const updatePassword =
  (currentPassword, newPassword) => async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_PASSWORD_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/users/profile/auth/${userInfo._id}`,
        { currentPassword, newPassword },
        config
      );

      dispatch({
        type: USER_PASSWORD_SUCCESS,
        payload: data,
      });

      return data;
    } catch (error) {
      dispatch({
        type: USER_PASSWORD_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// UPDATE AVATAR
export const updateAvatar = (avatarString) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/users/profile/avatar/${userInfo._id}`,
      { avatarString },
      config
    );

    dispatch({
      type: USER_UPDATE_SUCCESS,
      payload: data,
    });

    return data;
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
