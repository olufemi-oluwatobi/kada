import React from 'react';
import Routes from './routes';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from '../main/redux/store';

export const HomeContext = React.createContext();

const homeData = {
  text: 'Hello my name is Tobi, Kindly swipe left to navigate to product view',
  thumbnail:
    'https://cdn.dribbble.com/users/788099/screenshots/9986667/media/4f96295be4a2ed4071988977121b1e53.png',
};
const App = () => {
  return (
    <HomeContext.Provider value={homeData}>
      <Provider store={store}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </Provider>
    </HomeContext.Provider>
  );
};

export default App;
