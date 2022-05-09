import React from 'react';
import ReduxApp from './ReduxApp';
import AdvReduxApp, { store as s } from './AdvReduxApp';
import { Provider } from 'react-redux';

export default {
  title: 'redux/ReduxApp',
  component: ReduxApp,
  component: AdvReduxApp,
};

export const 기존redux = () => <ReduxApp />;
export const 새로운redux = () => (
  <Provider store={s}>
    <AdvReduxApp />
  </Provider>
);
