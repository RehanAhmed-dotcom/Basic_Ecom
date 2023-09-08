// import android.os.Bundle;
// import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Store, persistor} from './src/redux/config';
import Root from './src/Navigation/root';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
};

export default App;
