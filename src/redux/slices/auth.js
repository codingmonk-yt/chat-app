import { createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axios';

const initialState = {
  isLoggedIn: false,
  token: '',
  isLoading: false,
  email: '',
  error: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateIsLoading(state, action) {
      state.error = action.payload.error;
      state.isLoading = action.payload.isLoading;
    },
    login(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = '';
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    updateRegisterEmail(state, action) {
      state.email = action.payload.email;
    },
  },
});

// export reducer
export default authSlice.reducer;

// thunk actions

// login thunk
export function LoginUser(formValues) {
  // thunk function has to return another function here
  // it will be asunc because we are making an API call inside of it

  return async (dispatch, getState) => {
    axiosInstance
      .post(
        '/auth/login',
        { ...formValues },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then(function (response) {
        // handle success
        console.log(response);
        dispatch(
          authSlice.actions.login({
            isLoggedIn: true,
            token: response.data.token,
          })
        );
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
}

export function LogoutUser() {
  return async (dispatch, getState) => {
    // window.localStorage.removeItem('user_id');
    dispatch(authSlice.actions.logout());
  };
}

export function ForgotPassword(formValues) {
  return async (dispatch, getState) => {
    axiosInstance
      .post(
        '/auth/forgot-password',
        { ...formValues },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function ResetPassword(formValues) {
  return async (dispatch, getState) => {
    axiosInstance
      .post(
        '/auth/reset-password',
        { ...formValues },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then(function (response) {
        console.log(response);
        dispatch(
          authSlice.actions.login({
            isLoggedIn: true,
            token: response.data.token,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function RegisterUser(formValues) {
  return async (dispatch, getState) => {
    dispatch(
      authSlice.actions.updateIsLoading({ isLoading: true, error: false })
    );

    axiosInstance
      .post(
        '/auth/register',
        { ...formValues },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then(function (response) {
        console.log(response);
        dispatch(
          authSlice.actions.updateRegisterEmail({ email: formValues.email })
        );

        dispatch(
          authSlice.actions.updateIsLoading({ isLoading: false, error: false })
        );
      })
      .catch((error) => {
        console.log(error);
        dispatch(
          authSlice.actions.updateIsLoading({ error: true, isLoading: false })
        );
      })
      .finally(() => {
        // if there is error user should not be redirected
        if (!getState().auth.error) {
          window.location.href = '/auth/verify';
        }
      });
  };
}

export function VerifyEmail(formValues) {
  return async (dispatch, getState) => {
    dispatch(
      authSlice.actions.updateIsLoading({ isLoading: true, error: false })
    );

    axiosInstance
      .post(
        '/auth/verify',
        { ...formValues },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then(function (response) {
        console.log(response);

        dispatch(authSlice.actions.updateRegisterEmail({ email: '' }));
        window.localStorage.setItem('user_id', response.data.user_id);
        dispatch(
          authSlice.actions.login({
            isLoggedIn: true,
            token: response.data.token,
          })
        );

        dispatch(
          authSlice.actions.updateIsLoading({ isLoading: false, error: false })
        );
      })
      .catch((error) => {
        console.log(error);

        dispatch(
          authSlice.actions.updateIsLoading({ error: true, isLoading: false })
        );
      });
  };
}
