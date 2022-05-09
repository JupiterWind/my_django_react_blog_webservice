import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const reducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER: {
      return {
        ...state,
        ...payload,
      };
    }
    case SET_LOADING: {
      return payload;
    }
    case RESET_LOADING: {
      return initState;
    }
    default:
      return state;
  }
};

const SET_USER = 'user/SET_USER';
const SET_LOADING = 'loading/SET_LOADING';
const RESET_LOADING = 'loading/RESET_LOADING';

const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

const resetLoading = () => ({
  type: RESET_LOADING,
});

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const configureStore = (initStates) =>
  createStore(
    combineReducers(reducer),
    initStates,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

class ReduxApp extends PureComponent {
  store = configureStore({ loading: false });

  componentDidMount() {
    this.store.dispatch(setLoading(true));
    this.store.dispatch(resetLoading());
    this.store.dispatch(setUser({ name: 'Park', age: 20 }));
  }

  render() {
    return <Provider store={this.store}>리덕스 예제 </Provider>;
  }
}
export default ReduxApp;
